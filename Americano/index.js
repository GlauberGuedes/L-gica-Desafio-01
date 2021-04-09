const soma = input.reduce((acc, item) => acc + item);
    const resto = soma % input.length;
    if(resto === 0) {
        console.log(input.length);
    } else {
        console.log(resto);
    }
    