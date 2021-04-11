const codigos = input.trim().split("\n");
    let quantidadeDeLetras = 0;
    for(let letra of codigos[1]) {
        if(letra === codigos[0][quantidadeDeLetras]) {
        quantidadeDeLetras ++;
        }
    }
    if(quantidadeDeLetras === codigos[0].length) {
    console.log("SIM");
    } else {
    console.log("NAO");
    }