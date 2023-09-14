const arrayAbrigos = []
let codigoAbrigo = 0


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
    const nome = prompt("Digite o nome do abrigo:").toUpperCase() 
    const endereco = prompt("Digite o endereco do abrigo").toUpperCase() 
    const telefone = Number(prompt("Digite o telefone do abrigo:"))
    const capacidade = Number(prompt("Digite a capacidade do abrigo:"))
    const cidade = prompt("Digite a cidade onde esta localozado o abrigo:").toUpperCase() 

    

    const abrigo = {
      codigoAbrigo, nome, endereco, telefone, capacidade,cidade
    }
  arrayAbrigos.push(abrigo)
  codigoAbrigo++
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
  let abrigo = arrayAbrigos[i]
  
 lista += `${codigoAbrigo.toString().padStart(3,"0")} | ${abrigo.nome.padEnd(20)} | ${abrigo.endereco.padEnd(30)} | ${abrigo.telefone.toString().padEnd(12)} | ${abrigo.capacidade.toString().padEnd(12)} | ${abrigo.cidade.padEnd(15)}`

}
  prompt(lista)
 
  menu()
}


function procurarAbrigo() {
const procurarCidade = prompt("Qual cidade você está?:").toUpperCase() 
let abrigoLocalizacao = arrayAbrigos.filter(
  (abrigo) => abrigo.cidade === procurarCidade
)
let lista = `
--------------------
LISTAGEM DE ABRIGOS:
--------------------
CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
---------------------------------------------------------------------------------------------------------

  `
  if (abrigoLocalizacao.length === 0){
    alert("Não ha abrigos cadastrados nessa cidade!")
  }else{
for (let i = 0; i < abrigoLocalizacao.length; i++){
  let abrigo = abrigoLocalizacao[i]
  
 lista += `${codigoAbrigo.toString().padStart(3,"0")} | ${abrigo.nome.padEnd(20)} | ${abrigo.endereco.padEnd(30)} | ${abrigo.telefone.toString().padEnd(12)} | ${abrigo.capacidade.toString().padEnd(12)} | ${abrigo.cidade.padEnd(15)}`

}
  
}
prompt(lista)
menu()
}


menu()