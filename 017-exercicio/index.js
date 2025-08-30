// Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura correspondente em grau Celsius. Imprima na tela as duas temperaturas.

// Fórmula: C = (5 * ( F-32) / 9)

let tempFahrenheit = 90;

function converterParaGrausC(fahrenheit){
   let grausC = (5 *( fahrenheit - 32) / 9);
    return grausC;
}

let valorConvertido = converterParaGrausC(tempFahrenheit);

console.log(`Valor Fahrenheit = ${tempFahrenheit}`);
console.log(`Valor Graus Celsius = ${valorConvertido.toFixed(2)}`);