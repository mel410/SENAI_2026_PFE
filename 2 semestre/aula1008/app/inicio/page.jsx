import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default function Inicio() {
  return (
    <>
      <Header />
      <main>
        <h1 className="page-title">Bem-vindo ao SESI News</h1>
        <p className="page-subtitle">Sua fonte diária de conhecimento, esporte e inovação tecnológica.</p>

        <section className="hero-banner">
          <span className="hero-tag">✨ Portal Oficial</span>
          <h2 className="hero-title">Acompanhe todas as novidades e projetos dos alunos SESI/SENAI</h2>
          <p className="hero-desc">
            Explore as categorias de matérias, resultados esportivos e feiras tecnológicas organizadas pela nossa instituição.
          </p>
          <Link href="/categorias" className="btn-primary">
            Explorar Categorias →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}