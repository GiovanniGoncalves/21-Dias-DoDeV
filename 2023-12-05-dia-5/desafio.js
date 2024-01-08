// DESAFIO DIA #5:

// 1 - Calculadora DoDev

// 1.1 - Crie um algoritmo que peça 2 números ao usuário


// 1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números


// 1.3 - Exiba no console a operação feita e o resultado da conta
// *Não esqueça de testar seu código!


// Utilizei "Number" no lugar de "parseInt" para retornar valores de todos os tipos, seja valores quebrados, inteiros e etc.. Dessa forma acredito atender as necessidades do nosso usuário.


// Coletando os números para operação matemática
let num1 = Number(prompt('Digite um número')) 
let num2 = Number(prompt('Digite outro número'))
let opcao = prompt('Informe a operação matemática que deseja realizar: Multiplicação, Divisão, Subtração, Adição' ) 

// Guardando as operações matemáticas em cada variável.
let multiplicacao = num1 * num2 
let divisao = num1 / num2
let subtracao = num1 - num2
let adicao = num1 + num2

//Switch Case
switch(opcao){
    case "Multiplicação":
        (num1 * num2)
        console.log('O resultado da sua operação de multiplicação é: ' + multiplicacao)
    case "Divisão":
        console.log('O resultado da sua operação de divisão é: ' + divisao)
    case "Subtração":
        console.log('O resultado da sua operação de subtração é: ' + subtracao)
    case "Adição":
        console.log('O resultado da sua operação de multiplicação é: ' + adicao)
    break;
default:
    console.log('Voce não digitou nenhum opção')
}
