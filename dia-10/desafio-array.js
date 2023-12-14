// DESAFIO DIA #10:

// Lista de exercícios

// 1 - Crie um algoritmo que receba um número inteiro positivo e um array. 
// Popule o array e no final exiba os índices em que número inserido aparece nesse array. Para testes do exercício use até 10 elementos no array.

// // // // // const array = [];
// // // // // const indices = [];
// // // // // let contadorIndice = 0

// // // // // const numeroProcurado = parseInt(prompt('Digite o número a ser procurado'))

// // // // // for (let i = 0; i < 10; i++){ // Até 10 elementos
// // // // //     const elemento = parseInt(prompt(`Digite o elemento ${i + 1}: ` ));
// // // // //     array[i] = elemento;
// // // // // }

// // // // // for (let i = 0; i < 10; i++) {
// // // // //     if (array[i] === numeroProcurado) {
// // // // //         indices[contadorIndice] = 1
// // // // //         contadorIndice++
// // // // //     }
// // // // // }

// // // // // console.log(`O número ${numeroProcurado} foi encontrado nos índices: ${indices}`);




// 2 - Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba esse array. 
// Modifique os elementos do array de modo que a sequência de números fique ao contrário.

let arrayNumeros = [];
let arrayInvertido = [];

//POPULANDO ARRAY
for (let i = 0; i < 5; i++){
    let numeroSolicitados = parseInt(prompt("Digite o " + (i + 1) + "º número"));
    arrayNumeros[i] = numeroSolicitados;
}

console.log("Array original: " + arrayNumeros)

//INVERTENDO ARRAY
let contador = 4
for (let i = 0; i < 5; i++) {
    arrayInvertido[i] = arrayNumeros[contador]
    contador--    
}

console.log('Array Invertido: ' + arrayInvertido)