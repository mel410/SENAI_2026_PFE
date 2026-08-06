class Pessoa{
    nome;//atibuto publico
    #cpf = 12345678900;//atributo privado

    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
}

const estudante = new Pessoa();//instancia do objeto pessoa
estudante.nome = "Melissa";//acesso ao atributo publico nome
estudante.setCpf(12345678900);//acesso ao atributo privado cpf
console.log('O CPF do estudante é: ' + estudante.getCpf());//acesso ao atributo privado
console.log(estudante.nome);//acesso ao atributo publico nome

