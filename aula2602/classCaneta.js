class Caneta{
    //atributos públicos
    cor = "Azul";
    marca = "Bic";
    ponta = 'Fina';
    qtdTinta = 5;
    tampa = false;

    //método têm parenteses
    escrever(){
        return 'Começou a escrever';
    }

    sublinhar(valor){
        if (valor > this.qtdTinta) {
            return 'Erro: tinta insuficiente!';
        }
        this.qtdTinta -= valor; // subtrai o valor da quantidade de tinta
        return 'Quantidade restante de tinta: ' + this.qtdTinta;
    }
}

const canetaFina = new Caneta();

console.log(canetaFina.escrever());
console.log(canetaFina.sublinhar(2));
console.log(canetaFina.sublinhar(10)); 