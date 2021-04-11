const arrayStringNumeros = input.trim().split(" ");
    let pessoas = parseInt(arrayStringNumeros[0]);
    let taxiDuasVagas = parseInt(arrayStringNumeros[1]);
    let taxiUmaVaga = parseInt(arrayStringNumeros[2]);
    let taxi = parseInt(arrayStringNumeros[3]);
    let pessoa = 0;
    
    while (taxiUmaVaga > 0 && pessoas > 0) {
        if(pessoas < taxiUmaVaga) {
            taxi += pessoas;
        } else {
            taxi += taxiUmaVaga
        }
        pessoa = pessoas;
        pessoas -= taxiUmaVaga;
        taxiUmaVaga -= pessoa;   
    }
    if(taxiUmaVaga > 0) {
        taxi += taxiUmaVaga;
    }
    
    const resto = taxiDuasVagas % 2;
    if(resto === 0) {
        taxi += taxiDuasVagas / 2;
        taxiDuasVagas = 0;
    } else {
        taxi += Math.floor(taxiDuasVagas / 2);
        taxiDuasVagas = taxiDuasVagas - Math.floor(taxiDuasVagas / 2) * 2;
    }
    while (taxiDuasVagas > 0 && pessoas > 0) {
        taxiDuasVagas --;
        pessoas -= 2;
        taxi ++;
    }
    taxi += taxiDuasVagas;

    let restoPessoas = pessoas % 4;
    if(restoPessoas === 0 && pessoas > 0) {
        taxi += pessoas / 4;
        pessoas = 0;
    } else if (restoPessoas > 0 && pessoas > 0) {
        taxi += Math.floor(pessoas / 4);
        pessoas = pessoas - Math.floor(pessoas / 4) * 4;
    }

    if(pessoas > 0) {
        taxi += 1;
    }
  
    console.log(taxi);