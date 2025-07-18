const fs = require('fs');
const rawData = fs.readFileSync('./data.json','utf-8');
const user = JSON.parse(rawData);
const activos = user.filter(user => user.activo);

fs.writeFileSync('./filtered.json', JSON.stringify(activos, null, 2), 'utf-8');
console.log('Usuarios activos guardados en filtered.json');