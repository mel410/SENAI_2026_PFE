import { useState } from "react";

export default function Calculadora({ titulo }) {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  function validarNumeros(){
    if (num1 <= 0 || num2 <= 0) {
      setResultado("Digite apenas números maiores que zero.");
      return false;
    }
    return true;
  }

  function somar(){
    if(!validarNumeros()) return;
    setResultado(Number(num1) + Number(num2));
  }

  function subtrair(){
    if(!validarNumeros()) return;
    setResultado(Number(num1) - Number(num2));
  }

  function multiplicar(){
    if(!validarNumeros()) return;
    setResultado(Number(num1) * Number(num2));
  }

  function dividir(){
    if(!validarNumeros()) return;
    setResultado(Number(num1) / Number(num2));
  }

  function raizQuadrada(){
    if(!validarNumeros()) return;

    const r1 = Math.sqrt(Number(num1));
    const r2 = Math.sqrt(Number(num2));

    setResultado("√" + num1 + " = " + r1 + " | √" + num2 + " = " + r2);
  }

  function potenciacao(){
    if(!validarNumeros()) return;

    const resultadoPotencia = Math.pow(Number(num1), Number(num2));
    setResultado(resultadoPotencia.toLocaleString('pt-BR'));
  }

  function limpar(){
    setNum1("");
    setNum2("");
    setResultado("");
  }

  return (
    <div className="calculadora">

      <h1>{titulo}</h1>

      <input
        type="number"
        value={num1}
        onChange={(e)=>setNum1(e.target.value)}
        placeholder="Digite o primeiro número"
      />

      <input
        type="number"
        value={num2}
        onChange={(e)=>setNum2(e.target.value)}
        placeholder="Digite o segundo número"
      />

      <br /><br />

      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <button onClick={dividir}>Dividir</button>

      <br /><br />

      <button onClick={raizQuadrada}>Raiz Quadrada</button>
      <button onClick={potenciacao}>Potência</button>
      <button onClick={limpar}>Limpar</button>

      <h2>Resultado: {resultado}</h2>

    </div>
  );
}