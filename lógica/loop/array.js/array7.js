const arr = [
  "Kairi",
  24,
  "Henrik",
  35,
  8,
  102,
  "Makenna",
  "Armani",
  7,
  "Zole",
  64,
  2,
  4,
  "Nathanael",
  "Elina",
  5,
  "Grady",
  32,
  1,
  "Cora",
  23,
  "Jayce",
  5,
  "Mya",
  55,
  "Bjorn",
  40,
];
const numero = [];
const string = [];
for (let i = 0; i < arr.length; i++)
  if (typeof arr[i] == "number") {
    numero.push(arr[i]);
  } else if (typeof arr[i] == "string") {
    string.push(arr[i]);
  }
console.log(numero);
console.log(string);

//Crie um loop for que verifique cada elemento da lista. Para cada elemento, verifique se é um number ou uma string.
//Se for number ⇒ adicione na lista numbers.
//Se for string ⇒ adicione na lista strings.
//Use length,push e typeof
