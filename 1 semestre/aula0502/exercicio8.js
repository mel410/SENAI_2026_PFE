const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número: "));

function getRandomInt(min, max){
  //return Math.floor(Math.random(100 - 1) + 1)
  return parseInt(Math.random()*100);
}

if(num === getRandomInt(0,10)){
  console.log("Os números são iguais ", num + ' ' + getRandomInt())
}else{
  console.log("Os números são diferentes", num + ' ' + getRandomInt())
}