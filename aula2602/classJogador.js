class Jogador{// classe mãe
    #nome;
    #numero;
    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    treinar(){
        return "3x na semana";
    }
    getNome(){
        return this.#nome;
    }

    getNumero(){
        return this.#numero;
    }
}

//classe jogadorFutebol - filha
class JogadorFutebol extends Jogador{
    #peDominante;
    #totalGols;
    constructor(peDominante, totalGols, nome, numero){
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
        super(nome, numero);
        
    }   
    driblar(){
        return 'Tomou uma caneta';
    }
    fazerGol(qtsGols){
        return this.#totalGols += qtsGols;
    }
    mostrar(){
        return 'O jogador ' + super.getNome() + ' número ' + super.getNumero() + ' pé dominante ' + this.#peDominante + ' tem ' + this.#totalGols + ' gols';
    }
}

const jogador = new JogadorFutebol('Direito', 0, 'Neymar', 10);
jogador.fazerGol(2);
console.log(jogador.mostrar());