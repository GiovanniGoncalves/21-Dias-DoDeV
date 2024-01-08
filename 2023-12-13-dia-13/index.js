//Criando classe Aluno
class Aluno{
    nome
    idade
    areaAtuacao
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log("Olá, meu nome é : " + this.nome + " minha idade: " + this.idade + " e minha área de atuação é: " + this.areaAtuacao)
    }
}

//Exibindo Cadastro de alunos no console para o usuário, Simulando uma tela de sistema e pegando posição do Index
console.log("======= Cadastro de alunos =========")
let alunos = []
let continuar = true;
let indexDeAluno = 0;

while(continuar){
    let nome = prompt('Insira o nome do aluno')
    let idade = parseInt(prompt('Insira a idade do aluno'))
    let aluno = new Aluno (nome, idade)

    let areaAtuacao = prompt('Insira a área de atuação do aluno');
    aluno.areaAtuacao = areaAtuacao;

    alunos[indexDeAluno] = aluno;
    let desejaContinuar = prompt('Insira 1 caso deseja cadastrar um novo aluno');
    if(desejaContinuar != "1"){
        continuar = false;
        continue;
    }else{
        indexDeAluno++
    }

    
}


