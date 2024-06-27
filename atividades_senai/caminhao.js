const prompt = require("prompt-sync")();

let pesocaminhao = prompt("Qual o peso do caminhão, em kg? ").trim();

switch (true) {
  case pesocaminhao >= "1000" && pesocaminhao <= "3999":
    console.log("Caminhão de pequeno porte");
    break;
  case pesocaminhao >= "4000" && pesocaminhao <= "6000":
    console.log("Caminhão de médio porte");
    break;
  case pesocaminhao > "6000":
    console.log("Caminhão de grande porte");
    break;
  default:
    console.log("não é um caminhão");
}
