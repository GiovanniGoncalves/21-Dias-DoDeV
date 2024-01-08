// DESAFIO DIA #9::

// 1 - Conhecendo seu usuário

// Agora você deve exibir todos os anos que o usuário já viveu até o ano atual e informar qual a idade dele no determinado ano.
   

//    *ATENÇÃO: Aqui você deve utilizar o loop FOR.

//    Ex: Nasceu em 2018 você deve exibir: 

//        2018 - 0 anos de idade

//        2019 - 1 anos de idade

//        2020 - 2 anos de idade

//        2021 - 3 anos de idade

//        2022 - 4 anos de idade

let anosVividos = parseInt(prompt('Me informe o ano que você nasceu'));
    
 // Obtém o ano atual
    
    for (let ano = anosVividos; ano <= anoAtual; ano++) {
        let idade = ano - anosVividos;
        console.log(ano + ' - ' + idade + ' anos de idade');
    }
    
    let continuar = true;

// Utilizando o loop WHILE/DOWHILE, pergunte a seu usuário se ele deseja inserir novos dados ou se deseja finalizar o programa
    
    while (continuar) {
        let resposta = prompt('Deseja inserir novos dados? (S/N)');
        
        if (resposta.toUpperCase() === 'N') {
            continuar = false;
        } else if (resposta.toUpperCase() === 'S') {
            anosVividos = parseInt(prompt('Me informe o ano que você nasceu'));
            for (let ano = anosVividos; ano <= anoAtual; ano++) {
                let idade = ano - anosVividos;
                console.log(ano + ' - ' + idade + ' anos de idade');
            }
        } else {
            console.log('Resposta inválida. Por favor, digite S para Sim ou N para Não.');
        }
    }
    

