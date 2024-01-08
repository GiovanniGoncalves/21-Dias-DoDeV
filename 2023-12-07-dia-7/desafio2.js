// DESAFIO DIA #7::

// 2 - Caixa eletrônico DoDev (DOWHILE)

// *Não esqueça de testar seu código!

// Solicite o nome e o cpf do seu cliente.
// Pergunte um valor.
// Ofereça a opção de saque ou depósito.
// Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
// Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
// Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
// Exiba o saldo total.
// Exiba o maior valor inserido(independente de ser depósito ou saque).
// Exiba a média dos valores inseridos(independente de ser depósito ou saque).


// REGRAS: 
//     1- Considere iniciar a variável saldo com algum valor

//     1- Não deve ser permitido sacar um valor não disponível no saldo.

//     2- Não deve ser permitido sacar nem depositar um valor negativo.


let saldoTotal = 500;
let maiorValor = 0;
let somaValores = 0;

do {
    let informeValor = Number(prompt('Insira um valor'));
    if (informeValor < 0) {
        console.log('Valor inválido. Insira um valor positivo.');
        continue;
    }

    let opcao = prompt('Deseja fazer um saque ou depósito com o valor informado?').toLowerCase();

    if (opcao === "saque") {
        if (informeValor > saldoTotal) {
            console.log('Saldo insuficiente para o saque.');
        } else {
            saldoTotal -= informeValor;
        }
    } else if (opcao === "depósito") {
        saldoTotal += informeValor;
    } else {
        console.log('Opção inválida. Escolha "saque" ou "depósito".');
        continue;
    }

    somaValores += informeValor;

    if (informeValor > maiorValor) {
        maiorValor = informeValor;
    }

    let desejaContinuar = prompt('Deseja continuar? Insira 1 para continuar e 2 para parar.');
    if (desejaContinuar !== "1") {
        break;
    }

} while (true);

console.log('O valor total na conta é: ' + saldoTotal);
console.log('O maior valor inserido foi: ' + maiorValor);
console.log('A média dos valores inseridos foi: ' + (somaValores > 0 ? somaValores / 2 : 0));
