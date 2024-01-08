// DESAFIO DIA #10::

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

// let arrayNumeros = [];
// let arrayInvertido = [];

// //POPULANDO ARRAY
// for (let i = 0; i < 5; i++){
//     let numeroSolicitados = parseInt(prompt("Digite o " + (i + 1) + "º número"));
//     arrayNumeros[i] = numeroSolicitados;
// }

// console.log("Array original: " + arrayNumeros)

// //INVERTENDO ARRAY
// let contador = 4
// for (let i = 0; i < 5; i++) {
//     arrayInvertido[i] = arrayNumeros[contador]
//     contador--    
// }

// console.log('Array Invertido: ' + arrayInvertido)


// 3 - Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. Depois, 
// o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário

let quantidadeNumeros = parseInt(prompt("Quantos números você deseja inserir no array?"));
let arrayNumeros = [];
let arrayInvertido = [];

// POPULANDO ARRAY
for (let i = 0; i < quantidadeNumeros; i++) {
    let numeroSolicitado = parseInt(prompt("Digite o " + (i + 1) + "º número"));
    arrayNumeros.push(numeroSolicitado);
}

console.log("Array original: " + arrayNumeros);

// INVERTENDO ARRAY
arrayInvertido = arrayNumeros.slice().reverse();

console.log('Array Invertido: ' + arrayInvertido);


// 4 - Crie um algoritmo que peça um número inteiro positivo para o usuário. 
// Em seguida, popule um array com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores).
// Na hora de somar com os termos anteriores, some com elementos anteriores do array. 
// Faça com que o array tenha no máximo 10 elementos
// Para iniciar a sequência use o (número inserido - 1).

let numeroInserido = parseInt(prompt("Digite um número inteiro positivo:"));
let fibonacciArray = [];

// Verifica se o número inserido é positivo e maior que 0
if (numeroInserido > 0) {
    // Inicia a sequência de Fibonacci com os dois primeiros números
    fibonacciArray.push(0);
    fibonacciArray.push(1);

    // Preenche o restante do array usando a sequência de Fibonacci
    for (let i = 2; i < 10; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }

    console.log(`Os primeiros 10 números da sequência de Fibonacci a partir de ${numeroInserido - 1} são:`);
    console.log(fibonacciArray);
} else {
    console.log("Por favor, insira um número inteiro positivo maior que 0.");
}
