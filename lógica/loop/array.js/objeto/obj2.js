const carro = {
  marca: "Volkswagen",
  modelo: "Fusca",
  ano: "1200",
  cor: "Vermelho_prateado",
};
console.log(carro.modelo, carro.cor);
carro.cor = "jacinto";
carro.condição = "Regaçado";
delete carro.ano;
console.log(carro);
