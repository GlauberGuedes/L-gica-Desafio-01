let menor = Infinity;
for(let item of lista) {
    if(item < menor && item >= 18) {
       menor = item;
    }
}
if(menor >= 18 && menor !== Infinity) {
    console.log(menor);
} else{
    console.log("CRESÇA E APAREÇA");
}