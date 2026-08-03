import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          Terceiro A
        </Link>

        <nav>
          <ul className="menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/fotos">Fotos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}