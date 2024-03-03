// Desafio Dia 14:
// Reajuste

// 1 - Crie uma função que pergunte o nome e o salário de um colaborador;

var nome
var salario

function perguntarColaborador() {
    nome = prompt("Digite o nome do colaborador");
    salario = parseFloat(prompt("Digite o salário do Colaborador"));
    calcularAumentoSalario(nome, salario);
}

// 2 - Depois crie uma função que deve ser chamada dentro da função que solicita as informações, essa função irá calcular o aumento de salário conforme a seguinte tabela:
//        - ATÉ R$1.500,00 : aumento de 20%

//        - R$1.501,00 até R$2.000,00 : aumento de 15%

//        - R$2.001,00 até R$3.000,00 : aumento de 10%

//        - R$3.001,00 em diante : aumento de 5%

// Essa função tem que receber dois parâmetros: o salário e o nome do colaborador. Para calcular o aumente basta multiplicar o salário pela porcentagem.

function calcularAumentoSalario(nome, salario) {
    var aumento = 0;

    if (salario <= 1500) {
        aumento = 0.2; //20%
    } else if (salario <= 2000) {
        aumento = 0.15; //15%
    } else if (salario <= 3000) {
        aumento = 0.10; //10%
    } else {
        aumento = 0.05; //5%
    }

    var novoSalario = salario + (salario * aumento);


// 3 - Depois de calcular o aumento você deve exibir: o nome do colaborador, o salário, a % de aumento e o salário reajustado.

console.log("Nome do colaborador " + nome);
console.log("Salário: R$ " + salario);
console.log("Aumento: " + (aumento * 100) + "%");
console.log("Salário reajustado: R$" + novoSalario);

perguntarNovamente(); //Perguntar se deseja calcular novamente

}

// 4 - Crie uma função que  deve ser chamada no final da função que calcula o reajuste salarial, essa função deve perguntar se o usuário deseja calcular novamente com novas informações.

function perguntarNovamente() {
    var resposta = prompt("Deseja calcular novamente? (s/n)")

    if (resposta == "s") {
        perguntarColaborador(); //Reiniciar processo
    } else {
        console.log("Programa encerrado.");
    }
}

// 5 - Para testar basta chamar a primeira função criada, e as outras serão chamadas na sequência conforme a execução do código


//  * Para calcular o aumento, faça o valor do salário multiplicado
//    pela porcentagem em decimal.
//      Ex.: salário R$1.000,00 aumento de 10%   |   salário R$1.000,00 aumento de 15%
//           1000 * 1.10 = 1100                  |   1000 * 1.15 = 1150