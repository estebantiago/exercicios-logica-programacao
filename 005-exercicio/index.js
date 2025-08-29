// Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.518,00).



function calcularSalario ( salarioUsuario, salarioBase){
    return salarioUsuario / salarioBase;

}
const quantidadeSalarios = calcularSalario(5000, 1518);
console.log(`O usuário recebe ${quantidadeSalarios.toFixed(0)} salarios mínimos!`)
