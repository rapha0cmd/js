const prompt = require("prompt-sync")();

const idadecerta = 18;

const idade = Number(prompt("Insira sua idade"));

if (idade >= idadecerta) console.log("Apto a dirigir");
else console.log("Não possui idade o suficiente para dirigir");
