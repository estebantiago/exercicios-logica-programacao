// Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.

let notas = [10, 5, 7, 4];
let soma = 0;


for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}


function calcularMedia (soma){
    let media = soma / notas.length;
    return media;

}

const mediaCalculada = calcularMedia(soma).toFixed(2);
console.log(mediaCalculada);




