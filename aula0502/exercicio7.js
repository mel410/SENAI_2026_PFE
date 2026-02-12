const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número quebrado para poder realizar o arredondamento: "));
console.log("O número arredondado é: " + Math.trunc(num));