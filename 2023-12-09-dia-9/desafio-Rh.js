// DESAFIO DIA #9:

// 2 - RH DoDev

// Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.

// 1 - Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela.


// 2 - Peça para que seu cliente confirme as informações, se ele informar que digitou errado,
//  peça para colocar TODAS as informações novamente, repita as perguntas até o usuário informar que digitou as informações corretamente.


// 3 - Faça a previsão do salário dele para os próximos 10 anos considerando que:


//      - O cliente recebe anualmente aumento salarial. 

//      - Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; A partir do segundo ano, os aumentos salariais sempre corresponderam ao dobro
//       do percentual do ano anterior. Apresente todos os valores com o ano correspondente. Ex: 2024 - R$1600.

let nome = prompt('Informe o seu nome');
let idade = prompt('Informe a sua idade');

let salario = Number(prompt('Informe seu salario atual'));
let aumentoAnual = 0.015; // 1.5% representado como 0.015 em decimal

let continuar = true;

while (continuar) {
    let confirmacao = prompt('Confirme as informações - Seu nome é ' + nome + ', sua idade é ' + idade + ' e seu salário atual é R$' + salario + ' (S/N)');

    if (confirmacao.toUpperCase() === 'S') {
        console.log('Previsão do seu salário para os próximos 10 anos:');

        for (let ano = 1; ano <= 10; ano++) {
            salario *= (1 + aumentoAnual); // Atualiza o salário com o aumento anual
            console.log(2023 + ano + ' - R$' + salario.toFixed(2));
            aumentoAnual *= 2; // Dobra o aumento anual para o próximo ano
        }

        continuar = false; // Termina o loop
    } else {
        // Se o usuário informar que digitou errado, pede para colocar TODAS as informações novamente
        nome = prompt('Informe o seu nome novamente');
        idade = prompt('Informe a sua idade novamente');
        salario = Number(prompt('Informe seu salario atual novamente'));
    }
}
