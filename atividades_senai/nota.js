const prompt = require("prompt-sync")();

let valornota = prompt("insira sua nota: ");

switch (true) {
  case valornota >= 7 && valornota <= 10:
    console.log("Aprovado");
    break;
  case (valornota = 4 && valornota <= 6):
    console.log("recuperação");
    break;
  default:
    console.log("reprovado");
}
