let onibusA = a;
let onibusB = b;
let intervalo = 1;
let i = 2;
let booleano = false;

while(onibusA !== 1 || onibusB !== 1) {
    if(onibusA % i === 0 && onibusB % i === 0) {
        onibusA = onibusA / i;
        onibusB = onibusB / i;
        booleano = true;
        intervalo = intervalo * i;

    } else if(onibusA % i === 0 && onibusB % i !== 0) {
        onibusA = onibusA / i;
        intervalo = intervalo * i;
        booleano = true;
    } else if(onibusB % i === 0 && onibusA % i !== 0) {
        onibusB = onibusB / i;
        intervalo = intervalo * i;
        booleano = true;
    } else {
        booleano = false;
    }
    if(!booleano) {
    i++;
    }
}
console.log(intervalo);