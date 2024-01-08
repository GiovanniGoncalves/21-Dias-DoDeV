// DESAFIO DIA #13::

// Desafio 2 - Corrida DoDev

// 1 - Crie uma classe Carro com as seguintes propriedades:

// Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
// Potencia - número de cavalos de potência do carro;
// VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
// Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h

// 2 - Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância. Use a seguinte fórmula para o cálculo: 

//  resultado = distância / (VelocidadeMaxima / Aceleracao). 

//    A função deve retornar esse resultado; //

// 3 - Crie uma classe Corrida com as seguintes propriedades:

// Nome - nome do local da corrida;
// Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
// Distancia - o total em metros da corrida;
// Participantes - um array de objetos da classe Carro
// Vencedor - qual a equipe que ganhou a corrida;

// 4 - Adicione na classe Corrida um método que verifica qual foi o carro que completou a corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o nome do carro que fez o menor tempo na propriedade “Vencedor”.

// 5 - Adicione na classe Corrida um método que exibe na tela quem é o vencedor da corrida.

// 6 - Crie um objeto da classe Corrida e preencha a propriedade Participantes com alguns objetos da calsse Carro.

// 7 - Chame o método para verificar quem fez o menor tempo e por fim o método que exibe o vencedor.

// Criando a classe Carro;
class Carro {
    // Construtor da classe Carro com propriedades nome, potencia, velocidadeMaxima, aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
    }

    // Método da classe Carro para calcular o tempo necessário para percorrer uma distância
    calcularTempo(distancia) {
        return distancia / (this.velocidadeMaxima / this.aceleracao);
    }
}

// Criando classe Corrida
class Corrida {
    // Propriedades da classe Corrida: Nome, Tipo, Distancia, Vencedor, Participantes
    Nome 
    Tipo
    Distancia     
    Vencedor 
    Participantes

    // Construtor da classe Corrida com propriedades nome, tipo, distancia
    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Vencedor = ""
        this.Participantes = []
    }

    // Método da classe Corrida para definir o vencedor da corrida
    DefinirVencedor(){
        let menorTempo = this.Participantes[0].calcularTempo(this.Distancia)
        let vencedor = this.Participantes[0]

        // Loop para comparar os tempos de cada participante e encontrar o vencedor
        for (let index = 1; index < this.Participantes.length; index++){
            let tempo = this.Participantes[index].calcularTempo(this.Distancia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }

        // Atribui o vencedor à propriedade Vencedor da corrida
        return this.Vencedor = vencedor
    }

    // Método da classe Corrida para exibir o vencedor da corrida
    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.nome)
    }
}

// Criando uma instância da classe Corrida com nome "Monza", tipo "Fórmula 1" e distância 60000 metros
let corrida = new Corrida("Monza", "Fórmula 1", 60000)

// Preenchendo a propriedade Participantes da corrida com objetos da classe Carro
corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.Participantes[1] = new Carro("Marea", 210, 200, 9)
corrida.Participantes[2] = new Carro("Peugeot", 300, 220, 10)

// Chamando o método para definir o vencedor e exibindo o vencedor
corrida.DefinirVencedor();
corrida.ExibirVencedor();



  