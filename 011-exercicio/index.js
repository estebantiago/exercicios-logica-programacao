/*
Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7. */

class Aluno {
    nome;
    notas;

    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }
    calcularMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma = soma + this.notas[i];

        }
        return soma / this.notas.length;

    }

    descreverAluno() {
        let media = this.calcularMedia()
        console.log(`Nome do Aluno: ${this.nome}`);
        console.log(`Notas: ${this.notas.join(", ")}`);
        console.log(`Média: ${media.toFixed(2)}`);
        console.log(media >= 7 ? "Aprovado" : "Reprovado");

    }
}
let aluno = new Aluno('João', [10, 5, 5, 4])
aluno.descreverAluno()




