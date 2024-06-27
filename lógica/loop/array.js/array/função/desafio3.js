const prompt = require("prompt-sync")();
const cambioMoedas = {
  dolar_us: {
    nome: "Dólar Americano",
    codigo: "USD",
    valor_em_real: 5.4,
  },
  euro: {
    nome: "Euro",
    codigo: "EUR",
    valor_em_real: 6.52,
  },
  libra: {
    nome: "Libra Esterlina",
    codigo: "GBP",
    valor_em_real: 7.42,
  },
  iene: {
    nome: "Iene Japonês",
    codigo: "JPY",
    valor_em_real: 0.049,
  },
  dolar_au: {
    nome: "Dólar Australiano",
    codigo: "AUD",
    valor_em_real: 4.14,
  },
};
while (true) {
  const brl = Number(prompt("Digite um valor em reais (BRL): "));
  console.log("1- dolar_us , 2- euro , 3- libra, 4- iene, 5- dolar_au");
  const op = prompt("Digite sua opção: ");
  converter(brl,)
}
function converter (valor,moeda){
    return valor * cambioMoedas[]
}