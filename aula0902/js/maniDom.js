//alert('Eu estou aprendendo o Dom e sou um bom aluno(a)')
//alert('Eu estou aprendendo o Dom e meu professor é top')
let fundo = document.getElementById('corpo')
let fundoPagina = document.querySelector('#corpo')//seletor id
//document.querySelector('.corpo')//seletor class
const titulo = document.querySelector('.titulo');

fundo.style.backgroundColor = '#56aad7';
titulo.style.color = '#fff';
titulo.style.fontSize = '80px';
titulo.textContent += ' - Sesi Mirandópolis';