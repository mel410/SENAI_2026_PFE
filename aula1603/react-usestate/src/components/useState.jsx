import { useState } from "react";

export default function UseState({ titulo }) {

  const [nome] = useState("Melissa");
  const [idade] = useState("17");
  const [ra] = useState("2202100001");
  const [bolsa] = useState("500");

  return (
    <div className="perfil">

      <h3>{titulo}</h3>

      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>RA: {ra}</p>
      <p>Bolsa: {bolsa}</p>

    </div>
  );
}