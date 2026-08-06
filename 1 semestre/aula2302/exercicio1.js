class Livro {

    titulo = 'A Metamorfose'
    autor = 'Franz Kafka'
    ano = 1915
    paginas = 96
    preco = 29.90
    genero = 'Novela/Ficção existencialista'
    idioma = 'Alemão'
    formato = 'impresso'

     mostrar(){
        console.log('o livro é: ' + this.titulo + ' - ' + this.autor + ' - ' + this.ano + ' - ' + ' R$ ' + this.preco + ' - ' + this.genero + ' - ' + this.idioma + ' - ' + this.formato)
    }

}
const livroKafka = new Livro(); 
livroKafka.mostrar();