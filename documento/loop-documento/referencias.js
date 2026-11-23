// Genera secciones/08-referencias.md a partir de las notas de las secciones 2 a 6.
const fs=require("fs"),path=require("path");const S=path.join(__dirname,"secciones");
const ext=new Map(),internos=new Map();
for(const f of fs.readdirSync(S).filter(f=>/^0[2-6]-/.test(f)).sort()){
  const n=Number(f.slice(0,2));
  for(const m of fs.readFileSync(path.join(S,f),"utf8").matchAll(/^\[\^[^\]]+\]:\s*(.+)$/gm)){
    for(const parte of m[1].split(/;\s*(?=[\w./-]+\.md|§|«|\()/)){
      const ruta=(parte.match(/[\w.-]+(?:\/[\w.-]+)+\.md/)||[])[0];
      const sello=(parte.match(/\[(Fuente primaria|Fuente secundaria|Visto solo en buscador|Hipótesis|confirmar con Hernán)\]/)||[])[1]||"";
      for(const o of parte.matchAll(/\(([^)]+)\)/g)){const k=o[1].trim();if(/Triario|agente|tesis|mapa de|fichas|radar|bitácora|lectura|especialista|propia|veredicto|encargo|supervisor|D0d|Tdd|sección/i.test(k))continue;if(!ext.has(k))ext.set(k,{sello,secs:new Set()});ext.get(k).secs.add(n);}
      if(ruta){if(!internos.has(ruta))internos.set(ruta,new Set());internos.get(ruta).add(n);}
    }
  }
}
const ord=["Fuente primaria","Fuente secundaria","Visto solo en buscador","Hipótesis","confirmar con Hernán"];
let md="## 8. Referencias\nResponde: P5\n\nCada fuente lleva su nivel de evidencia y las secciones donde se usa. Las marcadas «Visto solo en buscador» no se pudieron abrir y verificar completas.\n\n";
for(const s of ord){const l=[...ext].filter(([k,v])=>v.sello===s);if(!l.length)continue;
  md+=`### ${s}\n\n`+l.map(([k,v])=>`- ${k} · secciones ${[...v.secs].join(", ")}`).join("\n")+"\n\n";}
md+="### Investigación interna de Triario\n\n"+[...internos].map(([r,v])=>`- \`${r}\` · secciones ${[...v].join(", ")}`).join("\n")+"\n";
fs.writeFileSync(path.join(S,"08-referencias.md"),md);console.log("externas",ext.size,"internas",internos.size);
