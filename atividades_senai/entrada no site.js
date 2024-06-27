const prompt = require("prompt-sync")();
const nome = "jorjao";
const senha = "jorjao2024";

const nomex = String(prompt("Insira seu usuário: "));
const senhax = String(prompt("Insira sua senha: "));

if (nome != nomex) console.log("Usuário incorreto");
else senha == senhax;
console.log("Acesso liberado");

if (senha != senhax) nome != nomex;
console.log("Acesso negado");
