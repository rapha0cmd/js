const pessoa = {
  nome: "Jessica canibal nordestina",
  idade: "24",
  profissão: "Podóloga",
  país: "Nordeste",
};
console.log(pessoa["nome"], pessoa["idade"]);
pessoa.profissão = "Vendedora da shopee";
pessoa.email = "carnedegaivota@gmail.com";
delete pessoa.país;
console.log(pessoa);
