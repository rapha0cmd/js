const par = [];
const impar = [];
const prompt = require("prompt-sync")();

for (let i = 1; i <= 100; i++)
  if (i % 2 == 0) {
    par.push(i);
  } else impar.push(i);
console.log(par, impar);
console.log("A quantidade de números pares é:", par.length);
console.log("A quantidade de números impares é:", impar.length);
