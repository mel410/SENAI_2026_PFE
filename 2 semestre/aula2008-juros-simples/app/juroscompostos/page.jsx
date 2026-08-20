'use client';

import { useState } from "react";

export default function JurosCompostos() {
  const [capital, setCapital] = useState("");
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");
  const [result, setResult] = useState(null);

  const calcularJuros = (e) => {
    e.preventDefault();

    const cap = parseFloat(capital);
    const tax = parseFloat(taxa) / 100;
    const temp = parseFloat(tempo);

    const montante = cap * Math.pow(1 + tax, temp);
    const juros = montante - cap;

    setResult({
      juros: juros.toFixed(2),
      montante: montante.toFixed(2)
    });
  };

  return (
    <section className="card">
      <div className="cabecalho">
        <h1>Juros Compostos</h1>
        <p>
          Calcule o rendimento e o valor total com juros compostos.
        </p>
      </div>

      <form onSubmit={calcularJuros} className="formulario">

        <div className="campo">
          <label>Capital inicial</label>
          <input
            type="number"
            placeholder="Ex: 1000"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label>Taxa de juros (%)</label>
          <input
            type="number"
            step="0.01"
            placeholder="Ex: 5"
            value={taxa}
            onChange={(e) => setTaxa(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label>Tempo (anos)</label>
          <input
            type="number"
            placeholder="Ex: 2"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          Calcular juros
        </button>

      </form>

      {result && (
        <div className="resultado">

          <div className="resultado-item">
            <span>Rendimento</span>
            <strong>R$ {result.juros}</strong>
          </div>

          <div className="resultado-item total">
            <span>Valor total</span>
            <strong>R$ {result.montante}</strong>
          </div>

        </div>
      )}
    </section>
  );
}