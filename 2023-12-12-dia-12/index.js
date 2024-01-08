// DESAFIO DIA #12:

// Comunidade DoDev

// 1 - Crie 2 arrays: um para nomes e um para senhas

// 2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.

// 3 - Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções.

// 4 - Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.

// 5 - Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de nomes e em caso
// positivo compare a senha no array de senhas. Se as duas comparações forem válidas exiba uma mensagem de sucesso

// 6 - Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, então procure pelo nome no array de nomes e exclua ele e a
// senha correspondente do outro array, por fim organize o array para eliminar os espaços vazios.

let nomes = [];
let senhas = [];
let continuar = true;
let nomeCadastro;
let senhaCadastro;
let usuarioCadastrado;
let senhaCadastrada;

do {
  let opcao = prompt(
    "O que você deseja fazer?\n1 - Cadastro\n2 - Login\n3 - Excluir um cadastro\n4 - Encerrar o programa"
  );

  switch (opcao) {
    case "1":
      nomeCadastro = prompt("Digite um nome");
      senhaCadastro = prompt("Digite uma senha");
      nomes.push(nomeCadastro);
      senhas.push(senhaCadastro);
      alert("Cadastro realizado com sucesso!");
      break;

    case "2":
      usuarioCadastrado = prompt("Informe seu login cadastrado");
      senhaCadastrada = prompt("Informe sua senha cadastrada");
      if (usuarioCadastrado === nomeCadastro && senhaCadastrada === senhaCadastro) {
        console.log("Login Efetuado Com Sucesso");
      } else {
        console.log("Usuário ou senha inválida");
      }
      break;

    case "3":
      let excluirCadastro = prompt("Digite o login cadastrado que deseja excluir");
      let index = nomes.indexOf(excluirCadastro);

      if (index !== -1) {
        nomes.splice(index, 1);
        senhas.splice(index, 1);
        console.log("Cadastro excluído com sucesso!");
      } else {
        console.log("Usuário não encontrado.");
      }
      break;

    case "4":
      continuar = false;
      console.log("Encerrando o programa.");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
      break;
  }

  console.log(nomes); // Para verificar o estado atual da array nomes
} while (continuar);

// AQUI APRENDI UM POUCO A UTILIZAR O LOCASTORAGE PARA UTILIZAR A OPÇÃO 3.

// let nomes = JSON.parse(localStorage.getItem("nomes")) || [];
// let senhas = JSON.parse(localStorage.getItem("senhas")) || [];
// let continuar = true;
// let nomeCadastro;
// let senhaCadastro;
// let usuarioCadastrado;
// let senhaCadastrada;

// let opcao = prompt(
//   "O que você deseja fazer?\n1 - Cadastro\n2 - Login\n3 - Excluir um cadastro\n4 - Encerrar o programa"
// );

// switch (opcao) {
//   case "1":
//     nomeCadastro = prompt("Digite um nome");
//     senhaCadastro = prompt("Digite uma senha");
//     nomes.push(nomeCadastro);
//     senhas.push(senhaCadastro);
//     alert("Cadastro realizado com sucesso!");
    
//     // Atualiza os dados no localStorage
//     localStorage.setItem("nomes", JSON.stringify(nomes));
//     localStorage.setItem("senhas", JSON.stringify(senhas));
    
//     break;

//   case "2":
//     usuarioCadastrado = prompt("Informe seu login cadastrado");
//     senhaCadastrada = prompt("Informe sua senha cadastrada");
    
//     if (usuarioCadastrado === nomeCadastro && senhaCadastrada === senhaCadastro) {
//       console.log("Login Efetuado Com Sucesso");
//     } else {
//       console.log("Usuário ou senha inválida");
//     }
//     break;

//   case "3":
//     let excluirCadastro = prompt("Digite o nome de login cadastrado");
//     let index = nomes.indexOf(excluirCadastro);
    
//     if (index !== -1) {
//         nomes.splice(index, 1);
//         senhas.splice(index, 1);
//         console.log("Cadastro excluído com sucesso!");
        
//         // Atualiza os dados no localStorage após a exclusão
//         localStorage.setItem("nomes", JSON.stringify(nomes));
//         localStorage.setItem("senhas", JSON.stringify(senhas));
//     } else {
//         console.log("Usuário não encontrado.");
//     }
//     break;

//   case "4":
//     continuar = false;
//     console.log("Encerrando o programa.");
//     break;

//   default:
//     console.log("Opção inválida. Tente novamente.");
//     break;
// }

// console.log(nomes); // Para verificar o estado atual da array nomes

