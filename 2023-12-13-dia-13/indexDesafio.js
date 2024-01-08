// 1 - Crie uma classe para representar o seu computador:

// Tipo - desktop ou notebook;
// Processador - nome do seu processador, ex: Ryzen 5
// Video - Integrado ou Dedicado;
// Armazenamento - número em GB de memória, ex: 500 ou 1000;
// MemoriaRam - número em GB de memória, ex: 4, 8 ou 16;
// SSD - True ou False


// Criando Classe Computador
class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }

    // 2 - Implemente um método nessa classe para exibir as informações no console;
    especificacoes(){
        console.log("Olá, aqui está a especificação do seu computador:\nTipo: " + this.tipo + "\n" + "Processador: " + this.processador + "\n" + "Video: " + this.video + "\n" +
        "Armazenamento: " + this.armazenamento + "\n" + "Memoria Ram: " + this.memoriaRam + "\n" + "SSD: " + this.ssd);
    }
}

// Criando as variáveis para pegar os dados
let tipo = prompt("Informe se o seu pc é Notebook ou Desktop")
let processador = prompt("Informe o seu processador")
let video = prompt("Informe sua placa de vídeo")
let armazenamento = parseInt(prompt("Informe número de GB de memória do seu HD, ex: 500 ou 1000"))
let memoriaRam = prompt("Informe quantos GB de memória")
let ssd = prompt('Você usa SSD? V para SIM e F para NÃO').toUpperCase(); // Converte para maiúsculas para aceitar 'v' ou 'V'

while (ssd !== "V" && ssd !== "F") {
    ssd = prompt('Resposta inválida. Você usa SSD? V para SIM e F para NÃO').toUpperCase();
}

if (ssd !== "V") {
    console.log("Você precisa usar SSD");
} else {
    console.log("Parabéns, você usa SSD");
}

// Criando uma instância da classe Computador
let meuComputador = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd === "V");


// Chamando o método especificacoes para exibir as informações no console
meuComputador.especificacoes();