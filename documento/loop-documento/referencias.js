// Genera secciones/08-referencias.md a partir de las notas de las secciones 2 a 6, en lenguaje para el lector.
const fs = require("fs"), path = require("path"); const S = path.join(__dirname, "secciones");
const INTERNO = /Triario|agente|tesis|mapa de|fichas|radar|bitácora|lectura|especialista|propia|veredicto|encargo|supervisor|D0\d|T\d\d|sección|rama|origin\//i;
const DOCS = { "t01-tesis": "Tesis de Loop Engineering", "t04-mostrar-loop": "Estudio de innovación del loop", "t13-explorador": "Informe de exploración de la industria", "t14-aterrizador": "Radar de conceptos de la industria", "t15-patrones": "Catálogo de patrones", "t16-supervisor": "Revisión de la investigación", "d02-marco": "Marco conceptual", "d03-radar": "Plano cartesiano", "d06-equipos": "Base de los equipos" };
const NIVEL = { "Fuente primaria": "Fuentes primarias", "Fuente secundaria": "Fuentes secundarias", "Visto solo en buscador": "Fuentes consultadas sin verificación completa", "Hipótesis": "Interpretaciones" };
const ext = new Map(), internos = new Map();
for (const f of fs.readdirSync(S).filter(f => /^0[2-6]-/.test(f)).sort()) {
  const n = Number(f.slice(0, 2));
  for (const m of fs.readFileSync(path.join(S, f), "utf8").matchAll(/^\[\^[^\]]+\]:\s*(.+)$/gm)) {
    for (const parte of m[1].split(/;\s*(?=[\w./-]+\.md|§|«|\()/)) {
      const sello = (parte.match(/\[(Fuente primaria|Fuente secundaria|Visto solo en buscador|Hipótesis)\]/) || [])[1] || "";
      for (const o of parte.matchAll(/\(([^)]+)\)/g)) { const k = o[1].trim(); if (INTERNO.test(k)) continue; if (!ext.has(k)) ext.set(k, { sello, secs: new Set() }); ext.get(k).secs.add(n); }
      const doc = Object.keys(DOCS).find(k => parte.includes(k));
      if (doc) { const nm = DOCS[doc]; if (!internos.has(nm)) internos.set(nm, new Set()); internos.get(nm).add(n); }
    }
  }
}
let md = "## 8. Referencias\nResponde: P5\n\nCada fuente se presenta con su nivel de evidencia y las secciones donde se usa. Las fuentes consultadas sin verificación completa se identificaron por buscador y no se pudieron revisar en su totalidad.\n\n";
for (const s of Object.keys(NIVEL)) {
  const l = [...ext].filter(([k, v]) => v.sello === s); if (!l.length) continue;
  md += `### ${NIVEL[s]}\n\n` + l.map(([k, v]) => `- ${k} · secciones ${[...v.secs].join(", ")}`).join("\n") + "\n\n";
}
md += "### Investigación interna de Triario\n\n" + [...internos].map(([k, v]) => `- ${k} · secciones ${[...v].sort().join(", ")}`).join("\n") + "\n";
fs.writeFileSync(path.join(S, "08-referencias.md"), md); console.log("externas", ext.size, "internas", internos.size);
