import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="brand-logo">
            <span className="brand-badge">SESI</span>
            <span className="brand-text">NEWS<span>.</span></span>
          </Link>
          <p>
            O seu portal definitivo de notícias, novidades tecnológicas, eventos esportivos e tudo o que acontece no ecossistema SESI/SENAI.
          </p>
        </div>

        <div>
          <h4 className="footer-title">Navegação</h4>
          <ul className="footer-links">
            <li><Link href="/">Início</Link></li>
            <li><Link href="/categorias">Categorias</Link></li>
            <li><Link href="/categorias/esportes">Esportes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Categorias</h4>
          <ul className="footer-links">
            <li><Link href="/categorias/esportes">Esportes & Lazer</Link></li>
            <li><Link href="/categorias">Tecnologia & Inovação</Link></li>
            <li><Link href="/categorias">Educação SESI</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SESI News. Todos os direitos reservados.</p>
        <p>Desenvolvido para SENAI PFE</p>
      </div>
    </footer>
  );
}