// Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3 centímetros por ano. Faça um algoritmo que calcule e imprima na tela em quantos anos serão necessários para que Sara seja Sara seja maior que Franscisco. 


let alturaFranscico = 150; // valores convertido para centímetro
let alturaSara = 110;

const crescimentoFransc = 2;
const crescimentoSara = 3;

let anos = 0;

while(alturaSara <= alturaFranscico){
    alturaFranscico +=  crescimentoFransc;
    alturaSara += crescimentoSara;
    anos += 1; 
}

console.log(`Serão necessarios ${anos} para que Sara seja mais alta que Franscisco! `)

console.log(`Altura da Sara : ${alturaSara / 100} m`); // valores convertidos para metros
console.log(`Altura da Franscisco : ${alturaFranscico / 100} m`);