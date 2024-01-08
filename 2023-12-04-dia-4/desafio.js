// DESAFIO DIA #4:

// 1 - Jantar especial?

// 1.1 - Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.


// 1.2 - Se estiver sem fome ou sem dinheiro exiba no console: "Hoje a janta será em casa"


// 1.3 - Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: "Peça um delivery!"


// 1.4 - Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: "Hoje o jantar será no seu restaurante preferido!"
// *Não esqueça de testar seu código!


let usuarioComFome = prompt('Olá, você está com fome?')
let temDinheiro = prompt('Você tem dinheiro?')
let restauranteAberto = prompt('O restaurante que deseja ir está aberto?')

if(usuarioComFome === "sim" && temDinheiro === "não"){
    console.log("Hoje a janta será em casa")
}
    else if(usuarioComFome === "sim" && temDinheiro === "sim" && restauranteAberto === "não") {
        console.log('Peça um delivery!')
}
else {
    console.log('Hoje o jantar será no seu restaurante preferido!')
}


