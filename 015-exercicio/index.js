// Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em consideração o ano com 365 dias e o mês com 30 dias.

// (Ex: 5 anos, 2 meses e 15 dias de vida)



function calcularIdadeCompleto(diaAtual, mesAtual, anoAtual,diaNascimento,mesDeNascimento,anoNascimento){

    let diasDeVida = diaAtual;
    let mesDeVida = mesAtual;
    let anosDeVida = anoAtual;

    if(diasDeVida < mesDeVida){
        mesDeVida = mesDeVida - 1;
        diasDeVida = diasDeVida + 30;
    }
    diasDeVida = diasDeVida - diaNascimento;

    if(anosDeVida < mesDeVida){
        anosDeVida = anosDeVida - 1;
        mesDeVida = mesDeVida + 12;
    }
    mesDeVida = mesDeVida -mesDeNascimento;

    anosDeVida = anosDeVida - anoNascimento;

    return `${anosDeVida} anos, ${mesDeVida} meses e ${diasDeVida} dias!`

}
 let resultado = calcularIdadeCompleto(30,8,2025,16,7,1991);
 console.log(resultado);








