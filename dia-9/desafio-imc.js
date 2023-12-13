// DESAFIO DIA #9:

// 1 - Conhecendo seu usuário

// Calcule o IMC do seu usuário e informe a faixa dele.


// *O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: IMC = peso / (altura x altura)

// O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2. Depois de obter o resultado, é possível verificar em que faixa o IMC se encontra, podendo indicar:

//       - Magreza, quando o resultado é menor que 18,5 kg/m2;

//       - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   

//       - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;

//       - Obesidade, quando o resultado é maior que 30 kg/m2.



// A partir da idade informada descubra o ano que o seu usuário nasceu(Considere o ano atual como 2023, faça essa conta usando apenas o ano).


const peso = parseFloat(prompt('Informe seu peso'))
const altura = parseFloat(prompt('Informe sua altura'))
const idade = parseInt(prompt('Informe sua idade'))

const anoAtual = 2023;
const anoNascimento = anoAtual - idade;

const imc = peso / (altura * altura)

console.log('Você nasceu no ano de: ' + anoNascimento)

if (imc < 18.5){
    console.log('Magreza, Vamos comer mais!' + 'seu imc é: ' + imc)
} else if (imc >= 18.5 && imc <= 24.9){
    console.log('Normal, sua saúde está boa.' + 'seu imc é: ' + imc)
} else if (imc >= 24.9 && imc <= 30){
    console.log('Sobrepeso, precisa fazer atividades física. ' + 'seu imc é: ' + imc)
} else {
    console.log('Obesidade, precisa procurar ajuda' + 'seu imc é: ' + imc)
} 
