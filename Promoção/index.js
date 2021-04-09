let menorValor = 0;
let valorTotal = precos.reduce((acc, item) => acc + item);
if(precos.length >= 3) {
  menorValor = precos.reduce((acc, item) => item < acc ? item : acc);
  console.log(valorTotal - menorValor / 2);
} else {
  console.log(valorTotal);
}