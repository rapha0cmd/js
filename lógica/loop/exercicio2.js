const prompt = require("prompt-sync")();

let numerodigitado = Number(prompt("Digite um número maior que 0: "));
for (let numero = 1; numero <= numerodigitado; numero++) {
  console.log(numero);
}
