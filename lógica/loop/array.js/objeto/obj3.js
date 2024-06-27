const prompt = require("prompt-sync")();
const arr = [];

for (let i = 0; i <= 5; i++) {
  const nome = prompt("digite um nome: ");
  const obj = {
    id: i,
    nome: nome,
  };
  arr.push(obj);
}
console.log(arr);
