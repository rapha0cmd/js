const prompt = require("prompt-sync")();
let frente = "frente";
let trás = "trás";
let direita = "direita";
let esquerda = "esquerda";

const direcao = String(prompt("Qual direção você quer ir: "));

if (direcao == "frente") {
  console.log("Foi para frente!");
} else if (direcao == "tras") {
  console.log("Foi para tras!!");
} else if (direcao == "direita") {
  console.log("Foi para direita!!");
} else if (direcao == "esquerda") {
  console.log("Foi para esquerda!!");
}
