class Jogador {
    #nome;
    #numero;
    constructor(nome, numero) {
        this.#nome = nome;
        this.#numero = numero;
    }
    getNome() {
        return this.#nome;
    }
    getNumero() {
        return this.#numero;
    }
    treinar() {
        return "Treina 3x na semana";
    }
}

class JogadorFutebolAmericano extends Jogador {
    #listaJogadas;
    #jardasConquistadas;
    constructor(nome, numero, listaJogadas, jardasConquistadas) {
        super(nome, numero); 
        this.#listaJogadas = listaJogadas;
        this.#jardasConquistadas = jardasConquistadas;
    }
    fazerTouchDown() {
        return "O jogador número " + this.getNumero() + " fez touchdown";
    }
    bloquear() {
        return "Bloqueou o adversário";
    }
    correrJardas(valor) {
        this.#jardasConquistadas += valor;
        return "Total de jardas: " + this.#jardasConquistadas;
    }
}

class JogadorBasquete extends Jogador {
    #alturaSalto;
    #totalCestas;
    constructor(nome, numero, alturaSalto, totalCestas) {
        super(nome, numero);
        this.#alturaSalto = alturaSalto;
        this.#totalCestas = totalCestas;
    }
    arremessar() {
        return "O jogador  " + this.getNome() +
               " número " + this.getNumero() +
               " arremessou a bola";
    }
    fazerEnterrada() {
        this.#totalCestas++;
        return "Enterrada realizada! Total de cestas: " + this.#totalCestas;
    }
}

const jogadorNFL = new JogadorFutebolAmericano("Jacob", 23, [], 0);
console.log(jogadorNFL.fazerTouchDown());
console.log(jogadorNFL.correrJardas(20));

const jogadorNBA = new JogadorBasquete("Edward", 23, 1.2, 0);
console.log(jogadorNBA.arremessar());
console.log(jogadorNBA.fazerEnterrada());