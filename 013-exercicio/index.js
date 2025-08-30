// Faça algoritmo que leia o nome e a idade de uma pessoa e imprima na tela o nome da pessoa e se ela é maior ou menor de idade. 

class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;

    }

    classificarPessoa (){
        if(this.idade >= 18){
            return 'Maior Idade';
        } else {
            return 'Menor Idade'
        }
    }

    descreverPessoa(){
        let classficarIdade = this.classificarPessoa()
        console.log(`Meu nome é ${this.nome} e sou ${classficarIdade} `)
    }

}

let pessoa1 = new Pessoa('João', 17);
pessoa1.descreverPessoa();