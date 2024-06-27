//Exiba no console a multiplicação dos elementos que estão na mesma linha.

const arr = [
  [10, 20, 60],
  [8, 10, 52],
];
let multiplicacao = 0;
let resultado = 0;

for (let linha = 0; linha < arr.length; linha++)
  for (let coluna = 0; coluna < arr.length; coluna++)
    if (coluna == 0) {
      multiplicacao = arr[linha][coluna] * arr[linha][coluna + 1];
    } else {
      resultado = multiplicacao * arr[linha][coluna + 1];
      console.log(resultado);
    }
