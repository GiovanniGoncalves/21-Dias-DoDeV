// DESAFIO DIA #3:

// Conhecendo o usuário

// 1 - Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, altura e peso. 

// 2 - Salve essas informações em variáveis e a partir delas obtenha o ano de nascimento (considere o ano atual como 2023, desconsidere o mês) e o IMC do usuário.

// *O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: 

// IMC = peso / (altura x altura)

// 3 - Exiba no console a seguinte mensagem (substituindo pelas informações obtidas): "Olá giovanni, você tem 23 anos, nasceu em 2000, tem 1,83 de altura, pesa 75kg seu IMC é 22,39 Kg/m2" 
// *Não esqueça de testar seu código!




let nome = prompt('Insiria seu nome')
let idade = Number(prompt('Insira sua idade'))
let altura = Number(prompt('Insira sua altura'))
let peso = Number(prompt('Insira seu peso'))
let anoNascimento = (2023 - idade)

console.log(anoNascimento)

let resultadoIMC = peso / (altura * altura)
console.log("Olá "+ nome+"," + " você tem " + idade + " anos, " + "nasceu em " + anoNascimento + ", " + "tem " + altura + " de altura, " + "pesa " + peso + "Kg e seu IMC é " + resultadoIMC + " Kg/m2");