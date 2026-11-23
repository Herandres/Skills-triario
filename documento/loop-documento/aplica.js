// Aplica reemplazos exactos. Uso: node aplica.js <archivo> <json con [[viejo,nuevo],...]>
const fs=require("fs");const [f,j]=process.argv.slice(2);let t=fs.readFileSync(f,"utf8");const miss=[];
for(const [a,b] of JSON.parse(fs.readFileSync(j,"utf8"))){if(t.includes(a))t=t.replace(a,b);else miss.push(a.slice(0,50));}
fs.writeFileSync(f,t);console.log("no aplicados:",miss.length?JSON.stringify(miss):"ninguno");
