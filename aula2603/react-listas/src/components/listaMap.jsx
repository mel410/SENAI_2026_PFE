const estudantes = [
  { id: 1, nome: "Melissa", ra: 123444, idade: 17 },
  { id: 2, nome: "Lorena", ra: 123666, idade: 17 },
  { id: 3, nome: "Yasmim", ra: 123888, idade: 16 },
];

export default function ListaMap({ titulo }) {
  const listaEstudantes = estudantes.map((estudante) => {
    return (
      <li>
        <h3>{estudante.nome}</h3>
        <p>{estudante.ra}</p>
        <p>{estudante.idade}</p>
      </li>
    );
  });
  return (
    <>
      <h1>{titulo}</h1>
      <ul>{listaEstudantes}</ul>
    </>
  );
}
