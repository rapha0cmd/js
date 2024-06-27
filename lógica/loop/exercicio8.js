const prompt = require("prompt-sync")();
let x = Number(prompt("Digite um número maior que 0: "));
let contador = 0;

for (let i = 1; i <= x; i++)
  if (x % i == 0) {
    contador++;
  }
if (contador == 2) console.log("É um número primo!");
else {
  console.log("Não é um número primo!");
}
