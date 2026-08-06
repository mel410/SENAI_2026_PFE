let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);
let classificacao;

if (imc < 18.5) {
  classificacao = "Abaixo do peso";
} else if (imc < 25) {
  classificacao = "Normal";
} else if (imc < 30) {
  classificacao = "Sobrepeso";
} else {
  classificacao = "Obesidade";
}

console.log(imc);
console.log(classificacao);