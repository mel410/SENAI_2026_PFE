// src/componentes/ListaFrutas.jsx

import React from "react";

function ListaFrutas() {
  // Array de frutas
  const frutas = ["Maçã", "Banana", "Morango", "Uva", "Abacaxi"];

  // Exemplo de filtro (frutas com mais de 5 letras)
  const frutasFiltradas = frutas.filter(fruta => fruta.length > 5);

  return (
    <ul>
      {frutasFiltradas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
}

export default ListaFrutas;