// DESAFIO DIA #5:

// 2 - DoDev thru


// 1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.


// 1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 


// 1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)


// 1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".
// *Não esqueça de testar seu código!



//Coletando opção do usuário
let opcoesPosto = prompt('Olá, seja muito bem vindo ao nosso posto, qual serviço deseja? Abastecer com Gasolina, álcool ou calibrar os pneus?')

//Atribuindo valor da Gasolina e do Alcool para variáveis.
litroGasolina = 5
litroAlcool = 3

//Dando as opções para o usuário
switch(opcoesPosto){
    case "Gasolina":
        valorGasolina = prompt('Qual valor desejado para abastecer?')
        console.log('OK, foram abastecido ' + litroGasolina * valorGasolina + ' litros de gasolina')
    case "álcool":
        valorAlcool = prompt('Qual valor desejado para abastecer?')
        console.log('OK, foram abastecido ' + litroAlcool * valorAlcool + ' litros de álcool')
    case "pneus":
        console.log('Pneus calibrados com sucesso')
        break;
        default:
            console.log('Você não digitou corretamente a opção que deseja')
    }
