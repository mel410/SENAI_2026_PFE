let hoje = new Date();
let fimDoAno = new Date(hoje.getFullYear(), 11, 31);

let dias = Math.ceil((fimDoAno - hoje) / (1000 * 60 * 60 * 24));

console.log("Faltam " + dias + " dias para o fim do ano");