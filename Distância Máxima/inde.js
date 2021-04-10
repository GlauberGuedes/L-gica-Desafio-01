const linhas = input.trim().split("\n");
const n = parseInt(linhas[0]);
const coordenadas = [];
for(let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: parseFloat(coord[0]),
        y: parseFloat(coord[1])
    })
    
}
let maior = 0;
for(let i = 0; i < coordenadas.length; i++) {
    for(let z = 0; z < coordenadas.length; z++) {
        if(Math.sqrt(Math.pow(coordenadas[i].x - coordenadas[z].x, 2) + Math.pow(coordenadas[i].y - coordenadas[z].y, 2)) > maior) {
            maior = Math.sqrt(Math.pow(coordenadas[i].x - coordenadas[z].x, 2) + Math.pow(coordenadas[i].y - coordenadas[z].y, 2));
        }
    }
}
console.log(maior);