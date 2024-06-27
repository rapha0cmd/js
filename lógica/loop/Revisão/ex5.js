const prompt = require("prompt-sync")();

const episodios = String(
  prompt("Digite um numero de episódios de uma série: ")
);

switch (true) {
  case episodios == 1 && episodios <= 10:
    console.log("Série curta");
    break;
  case episodios == 11 && episodios <= 100:
    console.log("Série média");
    break;
  case episodios == 101 && episodios <= 999:
    console.log("Série longa");
    break;
  case episodios > 1000:
    console.log("One Piece");
    break;

  default:
    console.log("Não existe");
}
