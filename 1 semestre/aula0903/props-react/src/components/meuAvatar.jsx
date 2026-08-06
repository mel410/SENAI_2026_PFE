function MeuAvatar(props){
    return(
        <div>
            <h2>Meu Avatar</h2>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Estilo Musical: {props.estilo}</p>
            <p>Disciplina Preferida: {props.disciplina}</p>
        </div>
    )
}

export default MeuAvatar;