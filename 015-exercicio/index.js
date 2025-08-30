// Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em consideração o ano com 365 dias e o mês com 30 dias.

// (Ex: 5 anos, 2 meses e 15 dias de vida)



function calcularIdadeCompleto(diaAtual, mesAtual, anoAtual,diaNascimento,mesNascimento,anoNascimento){

    let diaDeVida = diaAtual;
    let mesDeVida = mesAtual;
    let anoDeVida = anoNascimento;

    if(diaDeVida < diaNascimento){
        mesDeVida = mesDeVida - 1;
        diaDeVida = diaDeVida + 30;
    }
    diaDeVida = diaDeVida - diaNascimento;

    if(anoDeVida < mesNascimento){
        anoDeVida = anoDeVida - 1;
        mesNascimento = mesNascimento + 12
    }
    mesNascimento = mesNascimento - anoNascimento;
}


console.log(`${} anos, ${} meses e ${} dias!`);







