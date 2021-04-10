const jogada1 = jogadores.filter(x => x.jogada === 1);
  const jogada2 = jogadores.filter(x => x.jogada === 0);
    if(jogada1.length === 1) {
        console.log(jogada1[0].nome);
    } else if(jogada2.length === 1) {
        console.log(jogada2[0].nome);
    } else {
        console.log("NINGUEM");
    }