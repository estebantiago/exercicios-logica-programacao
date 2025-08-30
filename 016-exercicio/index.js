// Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é equilátero, isósceles ou escaleno.

function classificarTriangulo(a, b, c) {

    let valor1 = (a + b) > c;
    let valor2 = (a + c) > b;
    let valor3 = (b + c) > a;

    if (valor1 && valor2 && valor3) {
        console.log(`Os lados ${a}, ${b} e ${c} formam um triângulo válido!`);
    

    if(a === b && b === c){
        console.log('Classificação: Triangulo Equilátero');

    } else if(a === b || a === c || b === c){ 
        console.log('Classificação: Triangulo Isósceles');

    } else {
        console.log('Classificação: Triangulo Escaleno ')
    }

    } else { 
        console.log(`Os lados ${a}, ${b} e ${c} não formam um triângulo válido!`);
    }


}
let resultado = classificarTriangulo(10, 10, 5);
console.log(resultado);

