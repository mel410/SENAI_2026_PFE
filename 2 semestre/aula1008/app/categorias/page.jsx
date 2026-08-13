import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default function Categorias() {
  const categories = [
    {
      name: "Esportes",
      icon: "⚽",
      count: "24 matérias",
      description: "Campeonatos interclasses, olimpíadas, modalidades e vida saudável.",
      href: "/categorias/esportes"
    },
    {
      name: "Tecnologia & IA",
      icon: "🤖",
      count: "18 matérias",
      description: "Robótica, programação, inteligência artificial e maratonas de código.",
      href: "/categorias"
    },
    {
      name: "Educação & Ensino",
      icon: "🎓",
      count: "32 matérias",
      description: "Projetos pedagógicos, vestibulares, bolsas e novidades escolares.",
      href: "/categorias"
    },
    {
      name: "Cultura & Arte",
      icon: "🎨",
      count: "15 matérias",
      description: "Teatro, música, festivais de arte digital e literatura.",
      href: "/categorias"
    },
    {
      name: "Sustentabilidade",
      icon: "🌱",
      count: "12 matérias",
      description: "Energias renováveis, reciclagem e iniciativas ecologicamente corretas.",
      href: "/categorias"
    },
    {
      name: "Eventos & Avisos",
      icon: "📢",
      count: "9 matérias",
      description: "Feiras, reuniões, calendários e avisos oficiais do SESI.",
      href: "/categorias"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <h1 className="page-title">Explorar por Categorias</h1>
        <p className="page-subtitle">Navegue pelos tópicos de seu interesse e fique por dentro de tudo.</p>

        <div className="news-grid">
          {categories.map((cat, idx) => (
            <Link key={idx} href={cat.href} className="card category-card">
              <span className="category-icon">{cat.icon}</span>
              <h3 className="card-title">{cat.name}</h3>
              <p className="card-text">{cat.description}</p>
              <div className="card-footer" style={{ justifyContent: 'center' }}>
                <span>{cat.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}