// DESAFIO DIA #16:

// Comunidade Dodev pt.2

// 1 - Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, 
// excluir um cadastro ou encerrar o programa. Essa função deve retornar a opção escolhida pelo usuário.

// 2 - Crie uma função de cadastro que solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.

// 3 - Crie uma função de login que recebe dois valores como parâmetro, um nome e uma senha, depois procure o nome recebido
// no array de nomes e em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas retorne true se uma delas não for válida retorne false.

// 4 - Crie uma função de exclusão de cadastro que recebe um nome como parâmetro, então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array.

// 5 - Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as
// opções e que no login caso seja bem sucedido retorna uma mensagem “Login feito com sucesso!” e em caso negativo “Nome ou senha incorretos!”

// Arrays para armazenar os nomes e senhas
let nomes = [];
let senhas = [];

// Função para solicitar a opção ao usuário
function solicitarOpcao() {
   let opcao = prompt("Escolha uma opção:\n1. Cadastrar\n2. Fazer login " +
     "\n3. Excluir cadastro\n4. Encerrar programa");
   return opcao;
}

// Função para solicitar o nome e senha ao usuário
function cadastrarUsuario() {
    nomes.push(prompt("Digite o seu nome: "));
    senhas.push(prompt("Digite a sua senha: "));
}

// Função para fazer login
function fazerLogin(nome, senha) {
    let indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] === senha) {
        return true;
    } else {
        return false;
    }
}

// Função para excluir um cadastro
function excluirCadastro(nome) {
    let indice = nomes.indexOf(nome);
    if (indice !== -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Cadastro excluído com sucesso!");
    } else {
        console.log("Usuário não encontrado.");
    }
}

// Fluxo de funcionamento do programa
let continuar = true;
while (continuar) {
    let opcao = solicitarOpcao();

    switch (opcao) {
        case "1":
            cadastrarUsuario();
            break;
        case "2":
            let nomeLogin = prompt("Digite seu nome");
            let senhaLogin = prompt("Digite sua senha");
            let login = fazerLogin(nomeLogin, senhaLogin);
            if (login) {
                console.log("Login feito com sucesso");
            } else {
                console.log("Nome ou senha incorreta!");
            }
            break;
        case "3":
            let nomeExcluir = prompt("Digite o nome do usuário a ser excluído");
            excluirCadastro(nomeExcluir);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opção inválida. Tente novamente");
            break;
    }
}
