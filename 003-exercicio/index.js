//  Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores

let A = 8;
let B = 7;
let C = null;

if(A === B){
    C = A + B;  
    console.log(`Os valores são iguais, resultado da soma: ${C}`);
} else {
    if(A != B){
        C = A * B;
        console.log(`Os valores são diferentes. Resultado da multiplicação: ${C}`);
    }
}
   