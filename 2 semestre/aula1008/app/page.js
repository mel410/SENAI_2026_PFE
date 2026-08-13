import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";

export default function Home() {
  const news = [
    {
      id: 1,
      category: "Inovação",
      title: "SESI lança novo programa de Robótica e Inteligência Artificial para alunos",
      excerpt: "Projeto visa capacitar milhares de estudantes em tecnologia de ponta com laboratórios equipados com IA.",
      date: "13 Ago 2026",
      readTime: "4 min de leitura"
    },
    {
      id: 2,
      category: "Esportes",
      title: "Olimpíadas Estudantis SESI 2026 quebram recorde de inscrições",
      excerpt: "Mais de 5.000 atletas competirão nas modalidades de futebol, natação, atletismo e eSports este mês.",
      date: "12 Ago 2026",
      readTime: "3 min de leitura"
    },
    {
      id: 3,
      category: "Educação",
      title: "Feira de Ciências e Tecnologia apresenta projetos sustentáveis incríveis",
      excerpt: "Alunos desenvolvem soluções de energia renovável e purificação de água utilizando materiais reciclados.",
      date: "10 Ago 2026",
      readTime: "5 min de leitura"
    },
    {
      id: 4,
      category: "Cultura",
      title: "Teatro SESI recebe festival de música e arte digital neste final de semana",
      excerpt: "Apresentações gratuitas de bandas formadas por estudantes e exposições interativas de arte generativa.",
      date: "09 Ago 2026",
      readTime: "2 min de leitura"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="hero-banner">
          <span className="hero-tag">🔥 Destaque Principal</span>
          <h1 className="hero-title">
            SESI e SENAI unem forças em Mega Hub de Tecnologia Industrial
          </h1>
          <p className="hero-desc">
            Nova infraestrutura trará equipamentos de última geração, prototipagem 3D e parcerias com grandes empresas de tecnologia global.
          </p>
          <Link href="/categorias" className="btn-primary">
            Ler Matéria Completa →
          </Link>
        </section>

        <h2 className="section-title">Últimas Notícias</h2>
        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id} className="card">
              <span className="card-category">{item.category}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.excerpt}</p>
              <div className="card-footer">
                <span>📅 {item.date}</span>
                <span>⏱️ {item.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
