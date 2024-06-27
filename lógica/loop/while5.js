const prompt = require("prompt-sync")();
const usuario = "rafael_lindo";
const senha = "rafael2024";

while (true) {
  const usuariox = String(prompt("Digite o usuário: "));
  const senhax = String(prompt("Digite a senha: "));
  if (usuariox == usuario && senha == senha) {
    console.log("login realizado com sucesso!");
  } else {
    console.log("Login ou senha incorretos.");
  }
  break;
}
