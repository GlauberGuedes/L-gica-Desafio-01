const guerra = input.trim().split("");
const arrayUmCaminho = [];
let arrayDoisCaminhos = [];
const indices = [];
let indexMaior = guerra.indexOf(">");
let indexMenor = guerra.indexOf("<");

while (indexMaior !== -1) {
    indices.push(indexMaior);
    indexMaior = guerra.indexOf(">", indexMaior + 1);
}
while (indexMenor !== -1) {
    indices.push(indexMenor);
    indexMenor = guerra.indexOf("<", indexMenor + 1);
}

indices.sort((a, b) => a - b);

let x = 0;
for (let i = 0; i < guerra.length; i++) {
    if (guerra[i] === ">" || guerra[i] === "<") {
        arrayUmCaminho.push(guerra.slice(indices[x], indices[x + 1] + 1));
        x++;
    }
}

for (let i = 0; i < arrayUmCaminho.length; i++) {
    if (
        arrayUmCaminho[i][0] === ">" && arrayUmCaminho[i][arrayUmCaminho[i].length - 1] === "<" ||
        arrayUmCaminho[i][0] === "<" && arrayUmCaminho[i][arrayUmCaminho[i].length - 1] === ">"
    ) {
        arrayDoisCaminhos.push(arrayUmCaminho.splice(i, 1));
        i--;
    }
}

const arrayDoisCaminhosModificado = arrayDoisCaminhos.flat();
let maiorArray = 0;
let maiorArrayDois = 0;

for (let i = 0; i < arrayUmCaminho.length; i++) {
    if (arrayUmCaminho[i].length > maiorArray) {
        maiorArray = arrayUmCaminho[i].length;
    }
}

for (let i = 0; i < arrayDoisCaminhosModificado.length; i++) {
        if (arrayDoisCaminhosModificado[i].length > maiorArrayDois && arrayDoisCaminhosModificado[i][0] !== "<") {
            maiorArrayDois = arrayDoisCaminhosModificado[i].length;
        }
}

for (let item of guerra) {
    if (item === ">") {
        guerra.splice(0, guerra.indexOf(item));
    } else if (item === "<") {
        guerra.splice(guerra.indexOf(item) + 1, guerra.length);
    }
}

const temSinal = guerra.some(x => x === ">" || x === "<");

maiorArray -= 2;
maiorArrayDois -= 2;
if (maiorArray >= Math.ceil(maiorArrayDois / 2) && maiorArray >= 0) {
    console.log(maiorArray);
} else if (maiorArray < Math.ceil(maiorArrayDois / 2) && Math.ceil(maiorArrayDois / 2) >= 0) {
    console.log(Math.ceil(maiorArrayDois / 2));
} else if (!temSinal) {
    console.log(0);
} else {
    console.log(guerra.length - 1);
}