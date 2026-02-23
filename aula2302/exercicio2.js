class Bicicleta {
    modelo = 'Caloi Elite';
    marca = 'Caloi';
    cor = 'Preta';
    velocidadeMaxima = 35;

    setVelocidadeMaxima(valor) {
        if (valor > 35) {
            console.log("Velocidade máxima é 35 km/h.");
        } else {
            this.velocidadeMaxima = valor;
        }
    }

    getVelocidadeMaxima() {
        return this.velocidadeMaxima;
    }
}

const minhaBicicleta = new Bicicleta();

minhaBicicleta.setVelocidadeMaxima(30);

console.log("Marca: " + minhaBicicleta.marca);
console.log("Modelo: " + minhaBicicleta.modelo);
console.log("Cor: " + minhaBicicleta.cor);
console.log("Velocidade máxima: " + minhaBicicleta.getVelocidadeMaxima() + " km/h");