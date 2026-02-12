const prompt = require('prompt-sync')();

function calcularPontuacaoFinal() {
let pts = Number(prompt("Digite o primeiro número: "));
let resultado = (pts/2)

console.log("A pontuação final do aluno será: " + resultado**2)
}

calcularPontuacaoFinal();
