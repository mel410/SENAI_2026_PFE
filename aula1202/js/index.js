const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo')
const container = document.querySelector('#container')
const imagem = document.querySelector('#imagem')
const botao = document.querySelector('.botao')

corpo.style.backgroundColor = '#62d5f5'
corpo.style.color = 'white';
titulo.textContent = 'Adicionando elemento via JS'
container.style.width = '94%';
container.style.margin = '0 auto'
container.style.backgroundColor = '#ff4545'

let anuncio = '<h2>Curso dev com IA - Novidade!!!</h2>'
container.innerHTML += anuncio

//adicionando atributos 
imagem.setAttribute('src','./img/aranha.jpg')
//imagem.removeAttribute('src')//remove atributos

//adicionanado classe
imagem.classList.add('imagem')

//eventos
let contador = 0
botao.addEventListener('click', () =>{
    alert('clique no botao' + contador++)
})
