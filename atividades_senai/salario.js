const prompt = require("prompt-sync")();

let salario = Number(prompt("Qual seu salário?: "));
imposto1 = salario * Number(0.075);
imposto2 = salario * Number(0.15);
imposto3 = salario * Number(0.225);
imposto4 = salario * Number(0.275);

if (salario <= "2112") {
  console.log("Ta isento de imposto de renda, safado KKKKKKKKK");
} else if (salario >= "2112.01" && salario <= "2826.65") {
  console.log("vixi vai pagar 7,5% de imposto em, ta pouco ainda");
  console.log(imposto1);
} else if (salario >= "2826.66" && salario <= "3751.05") {
  console.log("15% de imposto, ta aumentando em mano");
  console.log(imposto2);
} else if (salario >= "3751.06" && salario <= "4664.68") {
  console.log("22.5% em, prepara o bolso");
  console.log(imposto3);
} else if (salario > "4664.68") {
  console.log("27.5%, vende tudo oq ce tiver");
  console.log(imposto4);
}
