const arr = [
  [10, 20, 60],
  [8, 10, 52],
];
soma = 0;
for (let linha = 0; linha <= arr.length; linha++) {
  for (let coluna = 0; coluna <= arr.length; coluna++) {
    soma = soma + arr[linha][coluna];
    console.log("A soma é:" + soma);
  }
}
