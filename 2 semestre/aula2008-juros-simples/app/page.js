'use client';

import JurosSimples from "./jurossimples/page";
import JurosCompostos from "./juroscompostos/page";

export default function Home() {
  return (
    <main className="pagina">
      <div className="calculadoras">

        <JurosSimples />

        <JurosCompostos />

      </div>
    </main>
  );
}