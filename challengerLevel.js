function HeroTitle (name, xp) {
    let title= "";
    if (xp < 1) {
        console.error('Valor Inexistente')
    }
    else if(xp <= 1000) {
        title= "Ferro";
    }
    else if(xp <= 2000) {
        title= "Bronze";
    }
    else if(xp <= 5000) {
        title= "Prata";
    }
    else if(xp <= 7000) {
        title= "Ouro";
    }
    else if(xp <= 8000) {
        title= "Platina";
    }
    else if(xp <= 9000) {
        title= "Ascendente";
    }
    else if(xp <= 10000) {
        title= "Imortal";
    }
    else {
        title= "Radiante";
    }
    
    let serverMensage = `O Herói de nome ${name} está no nível de ${title}`;

    //Se Nao usar o console, comente o 'return' e descomente o console log abaixo
    // console.log(serverMensage)
    return serverMensage;
}

console.log(HeroTitle('Warrior', 30000))
