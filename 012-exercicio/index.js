/*
12 - Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.

 Tabela de Código de Condições de Pagamento

 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

 2 - À Vista no cartão de crédito, recebe 10% de desconto

 3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

 4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%
 */




function calcularDesconto(precoProduto, porcentagem) {
    let desconto = precoProduto * (porcentagem / 100);
    return precoProduto - desconto;
}

function adicionarJuros(precoProduto, porcentagem){
    let jurosAdicionado = precoProduto *(porcentagem / 100);
    return precoProduto + jurosAdicionado;
}

let precoOriginalProduto = 2000;
let pagamentoEscolhido = 3;
let totalPagamento;


console.log(`Preço original do Produto: ${precoOriginalProduto}`);
console.log(`Forma de Pagamento descolhida ${pagamentoEscolhido}`);


switch(pagamentoEscolhido){
    case 1:
        totalPagamento = calcularDesconto(precoOriginalProduto,15);
        console.log('Você escolheu À vista Pagamento em Dinheiro ou Pix, 15% de desconto.');
        console.log(`Total pagamento após desconto: ${totalPagamento}`);
        break;
    case 2:
        totalPagamento = calcularDesconto(precoOriginalProduto,10);
        console.log('Você escolheu À vista cartão de crédito, 10% de desconto ');
         console.log(`Total pagamento após desconto: ${totalPagamento}`);
        
        break;
    case 3: 
    totalPagamento = precoOriginalProduto;
        console.log('Você escolheu parcelado em 2x sem juros, pagará o preço normal do produto!');
        console.log(`Total pagamento:${totalPagamento}`)
        break;

    case 4: 
        totalPagamento = adicionarJuros(precoOriginalProduto, 10);
        console.log('Você escolheu parcelado 3x ou mais vezes no cartão de crédito, adicional de 10% de juros');
        console.log(`Total pagamento com juros: ${totalPagamento}`)
        
        break;
    default:
        console.log('Inválido, escolha novamente! Opções entre 1 e 4.')

}






