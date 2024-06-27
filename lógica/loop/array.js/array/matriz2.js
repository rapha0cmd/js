const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
numbers.push([7, 8, 9]);
console.log(numbers);
numbers.unshift([10, 11, 12]);
console.log(numbers);
numbers.pop();
console.log(numbers.pop());
console.log(numbers);
numbers.shift([]);
console.log(numbers.shift());
