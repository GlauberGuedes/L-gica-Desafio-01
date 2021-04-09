const array = texto.trim().split(" ");
    const palavras = [];
    for(let item of array) {
        if(item !== "") {
            palavras.push(item);
        }
    }
    console.log(palavras.length);