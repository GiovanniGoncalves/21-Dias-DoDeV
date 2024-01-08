// DESAFIO DIA #13:

// Desafio 2 - Corrida DoDev

// 1 - Crie uma classe Carro com as seguintes propriedades:

// Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
// Potencia - número de cavalos de potência do carro;
// VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
// Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h

// 2 - Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância. Use a seguinte fórmula para o cálculo: 

//  resultado = distância / (VelocidadeMaxima / Aceleracao). 

//    A função deve retornar esse resultado;

// Criando a classe Carro;
class Carro {
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
    }

    // Criando método + retorno do resultado;
    calcularTempo(distancia) {
        return distancia / (this.velocidadeMaxima / this.aceleracao);
    }
}

// Solicitar informações ao usuário
let nome = prompt("Informe a equipe do carro (Ferrari, Mercedes, McLaren, etc):");
let potencia = parseFloat(prompt("Informe o número de cavalos de potência do carro:"));
let velocidadeMaxima = parseFloat(prompt("Informe a maior velocidade que o carro pode alcançar:"));
let aceleracao = parseFloat(prompt("Informe o tempo em segundos que o carro leva para ir de 0 a 100 km/h:"));
let distancia = parseFloat(prompt("Informe a distância em metros a percorrer:"));

// Criar uma instância da classe Carro
let carroCorrida = new Carro(nome, potencia, velocidadeMaxima, aceleracao);

// Calcular o tempo e exibir o resultado
let resultado = carroCorrida.calcularTempo(distancia);
console.log(`O tempo necessário para percorrer ${distancia} metros é de ${resultado} segundos.`);