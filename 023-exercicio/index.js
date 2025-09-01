// Faça um algoritmo que efetue o cálculo do salário líquido de um professor. As informações fornecidas serão: valor da hora aula, número de aulas lecionadas no mês e percentual de desconto do INSS. Imprima na tela o salário líquido final.


function calcularSalarioLiquido (valorHoraAula, qtdAulasMensais, percentualDesconto){
    let desconto = percentualDesconto / 100;
    let calculo = valorHoraAula * qtdAulasMensais;
    let resultado = calculo * desconto;
    return calculo - resultado;

}
let valorFinal = calcularSalarioLiquido(100, 40, 9);

console.log(`Salário Líquido Final: ${valorFinal}`);