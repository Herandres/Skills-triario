// Arma la carpeta de publicación del documento. Uso: node build.js <logo.png> <salida>
// Lee estado.json y secciones/*.md; escribe loop-documento.html, indice.json y secciones/.
const fs = require('fs'), path = require('path');
const [logo, out] = process.argv.slice(2);
const D = __dirname;
const est = JSON.parse(fs.readFileSync(path.join(D, 'estado.json'), 'utf8'));
fs.mkdirSync(path.join(out, 'secciones'), { recursive: true });
const archivos = fs.existsSync(path.join(D, 'secciones')) ? fs.readdirSync(path.join(D, 'secciones')) : [];
const files = {};
const secciones = est.secciones.map(s => {
  const c = Object.values(s.capas);
  const estado = s.capas.auditor === 'hecho' ? 'aprobada' : c.some(v => v !== 'pendiente') ? 'curso' : 'pendiente';
  const f = archivos.find(a => a.startsWith(String(s.n).padStart(2, '0') + '-'));
  let archivo = null;
  if (f && estado === 'aprobada') {
    archivo = 'secciones/' + f;
    fs.copyFileSync(path.join(D, 'secciones', f), path.join(out, archivo));
    files[archivo] = path.join(out, archivo);
  }
  return { n: s.n, titulo: s.titulo, responde: s.responde, estado, archivo };
});
fs.writeFileSync(path.join(out, 'indice.json'), JSON.stringify({ actualizado: est.actualizado, secciones }, null, 1));
files['indice.json'] = path.join(out, 'indice.json');
const b64 = fs.readFileSync(logo).toString('base64');
fs.writeFileSync(path.join(out, 'loop-documento.html'),
  fs.readFileSync(path.join(D, 'documento.src.html'), 'utf8').replace('__LOGO__', 'data:image/png;base64,' + b64));
console.log(JSON.stringify(files));
