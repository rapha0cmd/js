const prompt = require("prompt-sync")();
let nota1;
let nota2;
let nota3;
let media;

const notausuario1 = Number(prompt("Digite sua nota 1: "));
const notausuario2 = Number(prompt("Digite sua nota 2: "));
const notausuario3 = Number(prompt("Digite sua nota3:  "));

media = (notausuario1 + notausuario2 + notausuario3) / 3;

if (media < 4) {
  console.log("Reprovado!!!!!KKKKKKK");
} else if (media >= 4 && media <= 7) {
  console.log("Vixi, recuperação em");
} else {
  console.log("Aprovado, parabéns!!! ");
}
