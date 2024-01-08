// DESAFIO DIA #11:

// 1 - Avaliação da turma

// 1 - Crie um array para receber os nomes dos alunos e outro para receber as notas;


// 2 - Para cada aluno inserido pergunte o nome e a nota da prova;


// 3 - Seu usuário deve ter a opção de parar de inserir informações quando desejar;


// 4 - No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. Para calcular a média deve dividir a soma das notas pelo total de alunos.
// TESTE OS CÓDIGOS.


// CRIANDO VARIÁVEIS

let alunos = []
let notas = []
let continuar = true
let contador = 0

//CRIANDO LOOP
while (continuar) {
    let nome = prompt('Digite o nome do ' + (contador + 1) + 'º aluno')
    let nota = parseInt(prompt('Digite a nota do aluno'))
    alunos[contador] = nome
    notas [contador] = nota
    contador++
    let resposta = prompt('Deseja inserir informações sobre outro aluno? (s/n)')
    if (resposta == 'n')
        continuar = false
}

//EXIBINDO INFORMAÇÕES
console.log('Notas dos alunos: ')
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] + ' - ' + notas[i])
}

let someNotas = 0
for (let i = 0; i < notas.length; i++){
    someNotas += notas[i]
}

let media = someNotas / alunos.length
console.log('A soma das notas foi: ' + someNotas)
console.log('A média geral da turma foi: ' + media)