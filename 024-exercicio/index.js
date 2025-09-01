//  Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma viagem, sabendo que o carro faz 12km com um litro. Deve-se fornecer ao usuário o tempo que será gasto na viagem a sua velocidade média, distância percorrida e a quantidade de litros utilizados para fazer a viagem.

// Fórmula: distância = tempo x velocidade.
// litros usados = distância / 12.

const kmPorLitro = 12;

function calcularGastoViagem(tempoGasto, velocidadeMedia) {

    let distanciaCalculada = tempoGasto * velocidadeMedia;
    let litrosUtilizados = distanciaCalculada / kmPorLitro;
    
    
    return {
        distancia: distanciaCalculada,
        litros: litrosUtilizados
    };
}

let tempo = 2; // horas
let velocidade = 90; // km/h
let resultado = calcularGastoViagem(tempo, velocidade);

console.log("--- Resumo da Viagem ---");
console.log(`Distância a ser percorrida: ${resultado.distancia.toFixed(2)} km.`);
console.log(`Combustível necessário: ${resultado.litros.toFixed(2)} litros.`);