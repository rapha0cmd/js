const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número: "));
if (numero > "5") {
  console.log("O numero é maior que 5");
} else {
  console.log("Não é maior que 5");
}
