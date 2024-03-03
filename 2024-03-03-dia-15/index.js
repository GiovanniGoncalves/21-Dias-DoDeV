
// DESAFIO DIA #15:
// Números em comum

// 1 - Crie dois arrays: arrayA e arrayB. Preencha os dois arrays com 10 números cada, pode declarar já com valores;

let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

// 2 - Implemente uma função que receba dois arrays como parâmetro. Essa função deve retornar um array que contenha apenas os números em comum nos dois arrays recebidos como parâmetro.

// 3 - Se um número se repetir apenas no mesmo array, ele NÃO deve ser adicionado como um número comum.

// 4 - No array de saída NÃO deve ter números repetidos

function AcharNumerosEmComum(arrayUm, arrayDois){
    let resultado = [] //Declarando array de números em comum
    let contadorResultado = 0 //contador desse array

    // O primeiro FOR percorre o arrayUm
    for (let i = 0; i < arrayUm.length; i++) {
        // O segundo FOR percorre o arrayDois, para cada número de arrayUm ele compara com todos os números de arrayDois
        for (let j = 0; j < arrayDois.length; j++) {
            // Se a comparação for bem sucedida, ele adiciona esse número no array de números em comum e
            // atribui o valor máximo ao contador j assim encerrando a verificação para esse número e evitando números duplicados
            if(arrayUm[i] == arrayDois[j]){
                resultado[contadorResultado] = arrayUm[i]
                contadorResultado++
                j = arrayDois.length
            }
        }
    }

    return resultado
}

console.log(AcharNumerosEmComum(arrayA, arrayB))
