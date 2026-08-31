import Header from '../components/header';

const boletins = [
  { aluno: 'Ana Souza', matematica: 9.5, portugues: 9.0, ciencias: 9.8 },
  { aluno: 'Pedro Lima', matematica: 8.7, portugues: 8.2, ciencias: 8.9 },
  { aluno: 'Beatriz Costa', matematica: 9.2, portugues: 9.5, ciencias: 9.4 },
];

export default function ListaNotas() {
  return (
    <>
      <Header />
      <main style={{ padding: '40px 24px', background: 'linear-gradient(180deg, #f5f5f5 0%, #f9f2f2 100%)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ color: '#111111', marginBottom: '24px' }}>Boletins</h1>

          <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '20px', boxShadow: '0 18px 35px rgba(17,17,17,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f5f5f5', color: '#111111' }}>
                  <th style={cellStyle}>Aluno</th>
                  <th style={cellStyle}>Matemática</th>
                  <th style={cellStyle}>Português</th>
                  <th style={cellStyle}>Ciências</th>
                </tr>
              </thead>
              <tbody>
                {boletins.map((item) => (
                  <tr key={item.aluno}>
                    <td style={cellStyle}>{item.aluno}</td>
                    <td style={cellStyle}>{item.matematica}</td>
                    <td style={cellStyle}>{item.portugues}</td>
                    <td style={cellStyle}>{item.ciencias}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

const cellStyle = {
  borderBottom: '1px solid rgba(17, 17, 17, 0.08)',
  padding: '16px 18px',
  textAlign: 'left',
  color: '#111111',
};
