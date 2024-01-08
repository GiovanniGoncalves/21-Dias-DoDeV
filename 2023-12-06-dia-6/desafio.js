// DESAFIO DIA #6:

// Lista de exercícios.

// 1 - Faça um algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido.

                    // for(let contador = 0; contador <= valor; contador++ ){
                    //     console.log(contador)
                    // }



let valor = parseInt(prompt('Insira um valor inteiro'))



// 2 - Desenvolva um algoritmo que usando a estrutura FOR mostre no console uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5.
//    Ex.: 0 5 10 15 20 25 … 45 50 Fim!

                    // for (let contador = 0; contador <= valor; contador += 5) {
                    //     console.log(contador);
                    // }


// 3 - Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem mas na ordem inversa.
//    Ex.: 50 45 40 35 30 25 … 5 0 Fim!

for (let contador = valor; contador >= 0; contador -= 5) {
    console.log(contador);
}



// *Não esqueça de testar seu código!