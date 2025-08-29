//  Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

let numero = 3; 

if(numero % 2 === 0){
    if(numero < 0){
         console.log(`Número par e  Negativo! ${numero}`);
    } else {
        console.log(`Número par e Positivo! ${numero}`);
    }
} else {
    if(numero < 0){
        console.log(`Número impar e Negativo! ${numero}`)
    } else {
        console.log(`Número impar e Positivo! ${numero}`)
    }
}