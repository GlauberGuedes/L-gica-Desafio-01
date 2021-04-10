let valor = 0;
    if (min > 20 && km > 10) {
        valor += (20 * 50 + (min - 20) * 30) + (10 * 70 + (km - 10) * 50);
    } else if (min > 20 && km <= 10) {
        valor += (20 * 50 + (min - 20) * 30) + km * 70;
    } else if (min <= 20 && km > 10) {
        valor += min * 50 + (10 * 70 + (km - 10) * 50);
    } else if(min <= 20 && km <= 10) {
        valor += min * 50 + km * 70;
    }
    console.log(valor);