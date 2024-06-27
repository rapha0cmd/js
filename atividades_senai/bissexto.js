const prompt = require("prompt-sync")();

let anoqualquer = Number(prompt("Insira um ano qualquer: "));

let resto = anoqualquer % 4 && anoqualquer % 400;

if (resto == 0) {
  console.log("É um ano bissexto");
} else {
  console.log("É um ano comum");
}
