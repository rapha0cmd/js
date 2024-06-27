const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];

for (let linha = 0; linha < arr.length; linha++) {
  let colunaD1 = linha;
  let colunaD2 = arr.length - 1 - linha;
  console.log(arr[linha][colunaD1], arr[linha][colunaD2]);
}
