const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Insira nota1: "));
const nota2 = Number(prompt("Insira nota2: "));
const nota3 = Number(prompt("Insira nota3: "));

const resultado = (nota1 + nota2 + nota3) / 3;
console.log(resultado);
