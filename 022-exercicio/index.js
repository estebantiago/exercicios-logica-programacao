// Faça um algoritmo que leia dois valores inteiros A e B, imprima na tela o quociente e o resto da divisão inteira entre eles.




function calcularValoresInteiros(a, b){
     let quociente = Math.trunc(a / b); //Math.trunc() remove as casas decimais
     let restoDivisao = a % b;

    return `Quociente: ${quociente} Resto da Divisão: ${restoDivisao}`;
    
}
let valoresCalculados = calcularValoresInteiros(50, 5);
console.log(valoresCalculados);