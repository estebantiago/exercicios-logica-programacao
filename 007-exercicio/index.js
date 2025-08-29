// Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.



function analisarBooleanos(valorA, valorB) {
    if (valorA && valorB) {

        console.log('Ambos são verdadeiros');

    } else if (!valorA && !valorB) {

        console.log('Ambos são falsos');

    } else {
        console.log('Um é verdadeiro e o Outro é falso')
    }
}

let inputA = true;
let inputB = false; 
analisarBooleanos(inputA, inputB);

