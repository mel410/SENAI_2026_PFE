const estudantes = [
    {id: 1, nome: 'Melissa', rm: 2916, disciplina: "Lingua Portuguesa"},
    {id: 2, nome: 'Lorena', rm: 3222, disciplina: "Ingles"},
    {id: 3, nome: 'Yasmim', rm: 6767, disciplina: "Historia"}
];

export default function ListaFilter({titulo}) {
    const lista = estudantes.filter(estudante => estudante.disciplina == "Matemática");
    const listaEstudantes = lista.map((estudante) => {
        return <li key={estudante.id}>
            <h3>Nome: {estudante.nome}</h3>
            <p>RM: {estudante.rm}</p>
            <p>Idade: {estudante.idade}</p>
        </li>
    });
    return(
        <>
            <h1>{titulo}</h1>
            <ul>{listaEstudantes}</ul>
        </>
    )
}
