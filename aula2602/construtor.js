class Estudante{
    nome = 'Melissa';
    #ra;
    #cpf;

    constructor(nome, ra, cpf){
        this.nome = nome;
        this.#ra = ra;  
        this.#cpf = cpf;
    }
}

const Melissa = new Estudante('Melissa Bizotto','123456789','46028361860');
console.log(Melissa);