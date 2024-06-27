const prompt = require("prompt-sync")();
let espacos = 0;
const caminho = 10;
let i = 0;

while (true) {
  i++;

  const random = Math.random() * 20;
  const d20 = Math.ceil(random);
  if (d20 == 1) {
    espacos = espacos - 1;
    console.log(espacos);
  }
  if (d20 == 20) {
    espacos = espacos + caminho;
    console.log(espacos);
  } else if (d20 >= 12) {
    espacos = espacos + 1;
    console.log(espacos);
  }
  if (espacos >= caminho) {
    console.log("Você chegou no caminho e utilizou " + i);
    break;
  }
  console.log("Você tirou" + d20 + " no dado");
  prompt.hide();
}
