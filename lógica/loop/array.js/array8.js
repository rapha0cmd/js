//Crie uma lista com pelo menos 10 números aleatórios.
//Crie uma variável soma que inicie em 0.
//Crie um loop for que realize a soma de cada elemento da lista.
//Exiba a soma.
//Use length.
const arr = [40, 7, 59, 102, 61, 100, 147, 6, 19, 85];
let soma = 0;
for (let i = 0; i < arr.length; i++) soma = soma + arr[i];
console.log("o resultado é:" + soma);
