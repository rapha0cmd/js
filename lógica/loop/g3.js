const prompt = require("prompt-sync")();
let y = 0;

for (i = 1; i <= 10; i++) {
  const usuario = Number(prompt("Digite um número maior que 0: "));
  y = y + usuario;
  media = y / 10;
}
console.log("A média é: ", media);
