//APRENDENDO SWITCH CASE

let idade = Number(promp('Insira sua idade'))

switch(idade){
    case 10:
        console.log('voce tem 10 anos')
        console.log('segunda linha')
    case 15:
        console.log('voce tem 15 anos')
        console.log('segunda linha')
        break;
    default:
        console.log('default')
        break;
}

//UTILIZAR SWITCH CASE NO LUGAR DO IF ELSE QUANTO TIVERMOS UM CONDICIONAL QUE HOUVER MUITAS COMPARAÇÕES.