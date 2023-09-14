const arrayAbrigos = []



function menu() {
  let opcao = Number(
    prompt(`
      ===== SISTEMA DE CADASTRO DE ABRIGOS =====
      1. Cadastrar abrigo
      2. Listar abrigos
      3. Procurar abrigo
      4. Sair
      Escolha uma opção:`)
  );

  switch (opcao) {
    case 1:
      cadastrarAbrigo();
      break;
    case 2:
      listarAbrigos();
      break;
    case 3:
      procurarAbrigo();
      break;
    case 4:
      // Sair
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      menu();
  }
}

  function cadastrarAbrigo (){
    const nome = prompt("Digite o nome do abrigo:")
    const endereco = prompt("Digite o endereco do abrigo")
    const telefone = prompt("Digite o telefone do abrigo:")
    const capacidade = prompt("Digite a capacidade do abrigo:")
    const cidade = prompt("Digite a cidade onde esta localozado o abrigo:")

    const abrigo = {
      nome, endereco, telefone, capacidade,cidade
    }
  arrayAbrigos.push(abrigo)
  menu()
}


function listarAbrigos (){
  let lista = `
--------------------
LISTAGEM DE ABRIGOS:
--------------------
CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
---------------------------------------------------------------------------------------------------------

  `
for (let i = 0; i < arrayAbrigos.length; i++){
 lista += `${arrayAbrigos[i].nome.padEnd(20)} | ${arrayAbrigos[i].endereco.padEnd(30)} | ${arrayAbrigos[i].telefone.padEnd(12)} | ${arrayAbrigos[i].capacidade.padEnd(12)} | ${arrayAbrigos[i].cidade.padEnd(15)}`
}
  prompt(lista)
}






menu()