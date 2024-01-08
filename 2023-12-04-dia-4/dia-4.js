let idade = Number(prompt('Insira sua idade'))
let nome = prompt('Insira seu nome')

// Operadores de comparação
// == igual | != diferente | < menor que | > maior que | <= => maior e menor ou igual
// === é igual o valor e o tipo | !== é diferente o valor e o tipo!!

if (idade === 22 && nome === "Giovanni"){
    console.log("Seu nome é giovanni e você tem 22 anos")
}else if (idade === 22 || nome === "Giovanni"){
    console.log("Seu nome é giovanni ou você tem 22 anos")
}else{
    console.log("Seu nome não é giovanni e você não tem 22 anos")
}

// &&  -----  ||

// If Else

// if(idade <= 10){
//     console.log(idade)
//     let dentroEscopo = 'Giovanni'
//     console.log(dentroEscopo)
//     console.log('Você tem menos ou tem 10 anos')
//     if(true){
//         console.log("estou no tercceiro escopo")
//         console.log(dentroEscopo)
//     }
// }
// else{
//     console.log('Você tem mais que 10 anos')
// }

// console.log("SAI DO ESCOPO IF")
// console.log(dentroEscopo)