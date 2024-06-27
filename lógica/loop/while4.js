const prompt = require("prompt-sync")();

while (true) {
  const certo = 20;
  const x = Number(
    prompt("Digite um número entre 0 e 100 e tente acertar o número: ")
  );
  if (x > certo) {
    console.log("menor.");
  } else {
    console.log("maior.");
  }
  if (x == certo) {
    console.log("parabéns, você acertou o número!");
    break;
  }
}
