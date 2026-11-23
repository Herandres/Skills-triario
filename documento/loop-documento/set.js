// Actualiza estado.json. Uso: node set.js <n> <capa>=<valor> [...] [palabras=N] [vueltas=N] [sub=+N] [log="texto"]
const fs = require('fs'), path = require('path');
const F = path.join(__dirname, 'estado.json');
const e = JSON.parse(fs.readFileSync(F, 'utf8'));
const [n, ...pares] = process.argv.slice(2);
const s = e.secciones.find(x => x.n === Number(n));
const ahora = new Date(Date.now() - 5 * 3600e3).toISOString().slice(0, 16).replace('T', ' ');
for (const p of pares) {
  const [k, ...r] = p.split('='); const v = r.join('=');
  if (k === 'palabras' || k === 'vueltas') s[k] = Number(v);
  else if (k === 'sub') e.subagentes.usados += Number(v);
  else if (k === 'log') e.bitacora.push({ hora: ahora, evento: v });
  else s.capas[k] = v;
}
e.actualizado = new Date().toISOString();
fs.writeFileSync(F, JSON.stringify(e, null, 2));
console.log('ok', n, JSON.stringify(s.capas));
