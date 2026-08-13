import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Esportes() {
  const sportsNews = [
    {
      id: 1,
      title: "Final do Torneio Interclasse de Futsal acontece nesta sexta-feira",
      excerpt: "3º Ano A enfrenta o 2º Ano B em um confronto decisivo valendo o troféu anual do SESI.",
      date: "13 Ago 2026",
      category: "Futsal"
    },
    {
      id: 2,
      title: "Equipe de Natação conquista 8 medalhas no Circuito Regional",
      excerpt: "Atletas da escola se destacaram nas provas de 100m livre e revezamento 4x50m.",
      date: "11 Ago 2026",
      category: "Natação"
    },
    {
      id: 3,
      title: "SESI abre inscrições para novas turmas de Vôlei e Basquete",
      excerpt: "Treinamentos no contra-turno escolar para alunos de todas as idades.",
      date: "08 Ago 2026",
      category: "Basquete"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="hero-banner sports-banner">
          <span className="hero-tag" style={{ background: '#0284c7' }}>🏆 Central de Esportes</span>
          <h1 className="hero-title">Grande Final do Campeonato Interclasse 2026</h1>
          <p className="hero-desc">
            Acompanhe ao vivo os resultados e cobertura fotográfica dos jogos escolares do SESI.
          </p>

          <div className="scoreboard">
            <div className="team">3º Ano A 🏆</div>
            <div className="score">3 x 2</div>
            <div className="team">2º Ano B ⚽</div>
          </div>
        </section>

        <h2 className="section-title">Notícias Esportivas</h2>
        <div className="news-grid">
          {sportsNews.map((item) => (
            <article key={item.id} className="card">
              <span className="card-category">{item.category}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.excerpt}</p>
              <div className="card-footer">
                <span>📅 {item.date}</span>
                <span>🔥 Destaque</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}