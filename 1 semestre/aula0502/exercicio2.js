let prompt = require('prompt-sync')();
let idade = prompt("Informe sua idade:");

if (idade >= 16){
  console.log("Você tem idade suficiente para pegar livros emprestados.");
}else{
  console.log("Você NÃO tem idade suficiente para pegar livros emprestados.");
}
if (idade >= 18){
  console.log("Você é maior de idade.");
}else{
  console.log("Você NÃO é maior de idade.");
}