/*
9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição 
de acordo com a tabela abaixo:

Fórmula do IMC = peso / (altura) ²
Tabela Condições IMC

 Abaixo de 18,5   | Abaixo do peso          

 Entre 18,6 e 24,9 | Peso ideal (parabéns)  

 Entre 25,0 e 29,9 | Levemente acima do peso

 Entre 30,0 e 34,9 | Obesidade grau I 

 Entre 35,0 e 39,9 | Obesidade grau II (severa)

 Maior ou igual a 40 | Obesidade grau III (mórbida) */



 function calcularImc (peso, altura){
    return peso /( altura * altura);


    }
function classificarImc(){
    if(imc <= 18.5){
        return 'Abaixo do Peso'; 

    } else if (imc > 18.5 && imc <= 25){
        return 'Peso ideal(Parabéns)';
 
    } else if( imc > 25 && imc <= 30){
        return 'Levemente acima do peso';

    } else if(imc > 30 && imc <= 35) {
        return ' Obesidade grau I';
    } else if(imc > 35 && imc <= 40){
        return ' Obesidade grau II (Severa)';
    } else {
        if(imc >= 40){
            return ' Obesidade grau III (Mórbida)';
        }
}
}
const imc = calcularImc(96, 1.80).toFixed(2);
const classificacao = classificarImc(imc);

console.log(`Imc: ${imc}  Classificação: ${classificacao} `);

