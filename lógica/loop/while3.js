//Crie um loop while que tenha 10 iterações. A cada iteração, receba um número pelo prompt.
//Por fim, mostre no console o maior e o menor número.

const prompt = require("prompt-sync")();
let maiornumero = Number(prompt("Digite um número maior que 0: "));
let menornumero = maiornumero;

let i = 1;
while (i < 10) {
  const x = Number(prompt("Digite um número maior que 0: "));
  if (x > maiornumero) {
    maiornumero = x;
  }
  if (x < menornumero) {
    menornumero = x;
  }
  i++;
}
console.log("Maior número:  ", maiornumero);
console.log("Menor número: ", menornumero);
