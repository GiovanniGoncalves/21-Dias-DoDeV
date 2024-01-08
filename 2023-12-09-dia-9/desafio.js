// DESAFIO DIA #9::

// 1 - Conhecendo seu usuário

// Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, a partir disso você deve exibir um texto com todas essas informações. Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, Você exibe: Olá Giovanni, você tem 21 anos, é programador, tem 1.83M de altura e pesa 74kg.
// Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela “Está liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.
// Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. Considere ano com 365 dias, mês com 30 dias e semana com 7 dias. 



// Coletando dados do usuário.
const nome = prompt('Informe seu nome')
const idade = parseInt(prompt('Informe sua idade'))
const peso = Number(prompt("Insira seu peso"))
const altura = Number(prompt("Insira sua altura"))
const profissao = prompt("Insira sua profissão")


// Exibindo as informações inseridas.
console.log('Olá ' + nome + ',' + ' você tem ' + idade + ' anos, é programador, tem ' + altura + 'M de altura e pesa ' + peso + 'kg.')

if (idade >= 18){
    console.log('Está liberado para tomar umas geladas')
}else{
    console.log('Sem gelada para você')
}

// Fazendo cálculo para mostrar a idade em meses, semanas e dias.
const idadeEmMeses = idade * 12;
const idadeEmSemanas = idade * 52;  // Considerando 1 ano com 52 semanas
const idadeEmDias = idade * 365;  // Considerando 1 ano com 365 dias

// Exibindo ao usuário
console.log('Sua idade em meses é: ' + idadeEmMeses + ' meses.');
console.log('Sua idade em semanas é: ' + idadeEmSemanas + ' semanas.');
console.log('Sua idade em dias é: ' + idadeEmDias + ' dias.');