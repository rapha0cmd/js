const arr = [5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1];
for (let i = 0; i <= arr.length; i++)
  if (arr[i] == arr[i]) {
    arr.splice(0, i, i);
  }
arr.push(4);
arr.sort();
console.log(arr);
