let preco = 100;
let cupom = "OURO";
let precoFinal;

if (cupom === "BRONZE") {
  precoFinal = preco * 0.95;
} else if (cupom === "PRATA") {
  precoFinal = preco * 0.90;
} else if (cupom === "OURO") {
  precoFinal = preco * 0.85;
} else {
  precoFinal = preco;
}

console.log(precoFinal);