const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  soma = arr[i] + soma;
  console.log(soma);
}
