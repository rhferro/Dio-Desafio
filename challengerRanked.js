function HeroRank (vitorias, derrotas) {
    let calc = vitorias - derrotas;
    let title= rank(calc);
    if (calc <1) {
        
        return 'Valor Inexistente';
    }
    
    let serverMensage = `O Herói tem de saldo de ${calc} está no nível de ${title}`;

    //Se Nao usar o console, comente o 'return' e descomente o console log abaixo
    // console.log(serverMensage)
    return serverMensage;
}

function rank(saldoDeVitorias) {
    let title= "";
    if (saldoDeVitorias < 1) {
        
    }
    else if(saldoDeVitorias <= 10) {
        title= "Ferro";
    }
    else if(saldoDeVitorias <= 20) {
        title= "Bronze";
    }
    else if(saldoDeVitorias <= 50) {
        title= "Prata";
    }
    else if(saldoDeVitorias <= 80) {
        title= "Ouro";
    }
    else if(saldoDeVitorias <= 90) {
        title= "Diamante";
    }
    else if(saldoDeVitorias <= 100) {
        title= "Lendário";
    }
    else if(saldoDeVitorias >= 101) {
        title= "Imortal";
    }
    
    return title;
}

console.log(HeroRank(200, 58))
