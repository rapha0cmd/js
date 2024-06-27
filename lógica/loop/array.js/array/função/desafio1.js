const prompt = require("prompt-sync")();
const tarefa = {
  id: 1,
  tarefa: "lavar louça",
  marcada: false,
};

const lista = [tarefa];

console.clear();

function mostrarLista() {
  console.log(lista);
}

function adicionarTarefa() {
  const tarefa = prompt("Digite a tarefa para add: ");
  lista.push({
    id: lista.length + 1,
    tarefa: tarefa,
    marcada: false,
  });
  console.log(lista);
}

function marcarTarefa() {
  const id = prompt("Digite o id da tarefa para marcar: ");
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == id) {
      lista[i].marcada = true;
    }
    console.log(lista);
  }
}

function removerTarefa() {
  const id = prompt("Digite o id da tarefa para remover: ");
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == id) {
      lista.splice(i, 1);
    }
    console.log(lista);
  }
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
