// Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B e mostre se a soma é menor que C.


let A = 10 
let B = 10 
let C = 40
const soma = A + B; 

if(soma > C){
    console.log(`A soma é maior que C. Resultado: ${soma}`);
} else if (soma === C){
    console.log('Os resultados são iguais');
}
else {
    console.log(`A soma é menor que C. Resultado: ${soma} `);
}

