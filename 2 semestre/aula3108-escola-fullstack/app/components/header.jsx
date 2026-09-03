import Link from 'next/link';

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Painel', href: '/principal' },
  { label: 'Cadastro de alunos', href: '/cadaaluno' },
  { label: 'Lista de alunos', href: '/listaaluno' },
  { label: 'Notas', href: '/notaaluno' },
  { label: 'Boletins', href: '/listnota' },
];

export default function Header() {
  return (
    <header
      style={{
        background: 'linear-gradient(135deg, #111111 0%, #2a2a2a 45%, #7f1d1d 100%)',
        color: '#fff',
        padding: '18px 24px',
        boxShadow: '0 10px 30px rgba(17, 17, 17, 0.14)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>SESI SENAI</h1>

        <nav>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap',
              margin: 0,
              padding: 0,
            }}
          >
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    opacity: 0.95,
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}