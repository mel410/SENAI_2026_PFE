"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header-wrapper">
      <div className="header-container">
        <Link href="/" className="brand-logo">
          <span className="brand-badge">SESI</span>
          <span className="brand-text">NEWS<span>.</span></span>
        </Link>

        <nav className="nav-menu">
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/categorias" className={pathname?.startsWith("/categorias") ? "active" : ""}>
                Categorias
              </Link>
            </li>
            <li>
              <Link href="/categorias/esportes" className={pathname === "/categorias/esportes" ? "active" : ""}>
                Esportes
              </Link>
            </li>
          </ul>
        </nav>

        <div className="live-badge">
          <span className="pulse-dot"></span>
          Ao Vivo
        </div>
      </div>
    </header>
  );
}
