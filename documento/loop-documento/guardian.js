// Guardián del Loop del Documento. Revisa una sección contra el CONTRATO.md §7.
// Uso: node guardian.js <seccion.md> <numero_de_seccion>
// Sale con código 0 si pasa y 1 si falla. Imprime el informe en JSON.
const fs = require('fs');
const [file, nArg] = process.argv.slice(2);
const n = Number(nArg);
const TOPE = { 1: 300, 2: 300, 3: 800, 4: 800, 5: 700, 6: 400, 7: 200, 8: Infinity };
const SELLOS = ['Fuente primaria', 'Fuente secundaria', 'Visto solo en buscador', 'Hipótesis', 'confirmar con Hernán'];

const txt = fs.readFileSync(file, 'utf8');
const lineas = txt.split(/\r?\n/);
const esNota = l => /^\s*\[\^[^\]]+\]:/.test(l);           // definición de nota al margen
const cuerpo = lineas.filter(l => !esNota(l));
const cuerpoTxt = cuerpo.join('\n');
const fallas = [], avisos = [];

// 1. Cifras con fuente en la misma línea (APR-R10, APR-R05)
const sinFuente = [];
cuerpo.forEach((l, i) => {
  if (/^\s*#/.test(l) || /^\s*\|?\s*-{3,}/.test(l) || /^\s*Responde:/i.test(l)) return;
  const limpio = l.replace(/^\s*(\d+\.|[-*])\s+/, '').replace(/\]\([^)]*\)/g, ']').replace(/\[\^[^\]]+\]/g, '');
  if (/\d/.test(limpio) && !/\[\^[^\]]+\]/.test(l) && !SELLOS.some(s => l.includes(`[${s}]`)))
    sinFuente.push(lineas.indexOf(l) + 1);
});
const conCifra = cuerpo.filter(l => /\d/.test(l) && !/^\s*#/.test(l)).length;
if (sinFuente.length) fallas.push(`Cifras sin fuente en las líneas ${sinFuente.join(', ')}`);

// 2. Solo sellos válidos (APR-R07)
const sellosUsados = [...cuerpoTxt.matchAll(/\[([^\]\^][^\]]*)\](?!\()/g)].map(m => m[1]);
const invalidos = [...new Set(sellosUsados.filter(s => !SELLOS.includes(s)))];
if (invalidos.length) fallas.push(`Sellos no válidos: ${invalidos.map(s => `[${s}]`).join(', ')}`);

// 3. Pendientes de confirmar
const confirmar = (cuerpoTxt.match(/\[confirmar con Hernán\]/g) || []).length;
if (confirmar) avisos.push(`${confirmar} marca(s) «[confirmar con Hernán]»`);

// 4. Extensión
const palabras = cuerpo.filter(l => !/^\s*#/.test(l)).join(' ').replace(/\[\^[^\]]+\]/g, '').split(/\s+/).filter(w => /\p{L}/u.test(w)).length;
if (palabras > TOPE[n]) fallas.push(`Extensión: ${palabras} palabras, tope ${TOPE[n]}`);

// 5. Declara la pregunta que responde
if (!/^\s*Responde:\s*P[1-5]/im.test(txt)) fallas.push('No declara «Responde: Pn»');

// 6. Sin códigos internos ni rutas en el cuerpo (van a notas)
const codigos = [...new Set(cuerpoTxt.match(/\b(T\d{2}|D0\d|HP-\d+|DF-\d+|HR-\d+|APR-[ATR]\d+|ADR-\d+)\b|[\w-]+\/[\w./-]+\.(md|json|svg)/g) || [])];
if (codigos.length) fallas.push(`Códigos internos o rutas en el cuerpo: ${codigos.join(', ')}`);

// 7. Sin deriva hacia el sistema del cierre fuera de la sección 5
const deriva = (cuerpoTxt.match(/\b(Relevo|Taller|oficina del Relevo|relevo de documentación|cierre del proyecto)\b/g) || []).length;
if (deriva && [2, 3, 4].includes(n)) fallas.push(`Deriva al sistema del cierre: ${deriva} mención(es) en una sección del concepto`);
else if (deriva && n !== 5) avisos.push(`${deriva} mención(es) al sistema del cierre; revisar que sea solo de paso`);

// 8. Prohibidos
if (/pr[oó]ximos pasos/i.test(cuerpoTxt)) fallas.push('Tiene «próximos pasos»');
const guiones = (cuerpoTxt.match(/—/g) || []).length;
if (guiones) fallas.push(`${guiones} guion(es) largo(s)`);

const informe = { seccion: n, pasa: fallas.length === 0, palabras, tope: TOPE[n], lineas_con_cifra: conCifra, fallas, avisos };
console.log(JSON.stringify(informe, null, 2));
process.exit(informe.pasa ? 0 : 1);
