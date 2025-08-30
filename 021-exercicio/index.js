// Faça um algoritmo que mostre um valor aleatório entre 0 e 100.

const min = 0 ;
const max = 100; 

const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numeroAleatorio);