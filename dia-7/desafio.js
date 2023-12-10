// DESAFIO DIA #9:

// 1 - DoDev school (WHILE)

// Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:


//  - A média geral dos alunos
//  - Quantos homens enviaram as notas
//  - Quantas mulheres tiveram nota acima de 7
//  - Qual a maior nota entre os homens


//     *Obs.: para obter a média geral deve somar todas as notas e 

//     dividir pelo número de alunos!

// *Não esqueça de testar seu código!


let condicao = true;
let totalNotas = 0;
let totalAlunos = 0;
let totalHomens = 0;
let mulheresAcima7 = 0;
let maiorNotaHomens = 0;

while (condicao) {
    let notaAluno = Number(prompt('Insira sua nota: '));
    let sexoAluno = prompt('Insira seu sexo: M ou F');

    // Verifica se as entradas são válidas
    if (isNaN(notaAluno) || (sexoAluno !== 'M' && sexoAluno !== 'F')) {
        console.log('Entrada inválida. Insira uma nota válida e um sexo válido (M ou F).');
        continue; // Pula para a próxima iteração do loop
    }

    totalNotas += notaAluno;
    totalAlunos++;

    if (sexoAluno === 'M') {
        totalHomens++;
        if (notaAluno > maiorNotaHomens) {
            maiorNotaHomens = notaAluno;
        }
    } else if (sexoAluno === 'F' && notaAluno > 7) {
        mulheresAcima7++;
    }

    // Pergunta ao usuário se deseja cadastrar outra nota
    condicao = confirm('Você deseja cadastrar outra nota?');
}

// Calcula a média geral dos alunos
let mediaGeral = totalNotas / totalAlunos;

console.log("Média geral dos alunos: " + mediaGeral.toFixed(2));
console.log("Quantidade de homens: " + totalHomens);
console.log("Quantidade de mulheres com nota acima de 7: " + mulheresAcima7);
console.log("Maior nota entre os homens: " + maiorNotaHomens);
