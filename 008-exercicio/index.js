// Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.
let a = 30;
let b = 50;
let c = 20;

let valores = [a, b , c];

valores.sort((x, y) => y - x);

console.log('valores em ordem decrescente:', valores.join(","));