// Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.



function reajustarValor (valor, porcentagem ){
    let calculoPorcentagem =  valor * (porcentagem / 100);
    return valor + calculoPorcentagem;

}

const valorReajustado = reajustarValor(10000,5);
console.log(`Valor após reajuste: ${valorReajustado}`);

