class Carro{
    //atributos
    modelo = 's10 cabine dupla'
    marca = 'chevrolet'
    ano = 2025
    preco = 200000

    //metodos

    mover(){
        console.log('estou me movendo')
    }

    mostrar(){
        console.log('o carro é: ' + this.modelo + ' ' + this.marca + ' ' + this.ano + ' ' + this.preco)
    }

}

const caminhonete = new Carro();//instanciando a classe = criar objeto
caminhonete.mover();//utilizar métodos
caminhonete.mostrar();