const prompt = require("prompt-sync")();

const celsius = Number(prompt("Insira a temperatura em graus celsius: "));

const resultado = celsius * 1.8 + 32;
console.log(resultado);
