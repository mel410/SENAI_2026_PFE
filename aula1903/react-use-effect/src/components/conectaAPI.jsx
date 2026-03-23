import { useEffect, useState } from "react";

export default function ConectaAPI() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setDados(data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        setErro("Erro ao carregar dados");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Usuário Aleatório</h2>
      <img src={dados.picture.large} alt="foto" />
      <p><strong>Nome:</strong> {dados.name.first} {dados.name.last}</p>
      <p><strong>Email:</strong> {dados.email}</p>
      <p><strong>País:</strong> {dados.location.country}</p>
    </div>
  );
}

