let nomes = []; // Criando uma array vazio.
continuar = true; // Apenas para controlar quando eu quero sair ou não da array.
let posicaoDoArray = 0; // Em que posição do Array eu vou adicionar o nome.

while(continuar === true){
    let nomeInserido = prompt('Insira um nome');
    nome[posicaoDoArray] = nomeInserido

    let desejaContinuar = prompt('Insira 1 caso deseje adicionar um novo nome')
    if(desejaContinuar != '1'){
        continuar = false;
        break;
    }
    posicaoDoArray++;
}