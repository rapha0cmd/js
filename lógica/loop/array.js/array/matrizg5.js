const arr = [
  [10, 20, 30],
  [10, 20, 30],
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
