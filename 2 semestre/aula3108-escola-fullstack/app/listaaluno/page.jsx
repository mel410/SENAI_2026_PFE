import Header from '../components/header';

const alunos = [
  { id: 1, ra: 1001, nome: 'Melissa', idade: 17, serieTurma: '3A' },
  { id: 2, ra: 1002, nome: 'Bianca', idade: 17, serieTurma: '3A' },
  { id: 3, ra: 1003, nome: 'Luana', idade: 18, serieTurma: '3A' },
  { id: 4, ra: 1004, nome: 'Noemi', idade: 18, serieTurma: '3A' },
];

export default function ListaAluno() {
  return (
    <>
      <Header />
      <main style={{ padding: '40px 24px', background: 'linear-gradient(180deg, #f5f5f5 0%, #f9f2f2 100%)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ color: '#111111', marginBottom: '24px' }}>Lista de alunos</h1>

          <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '20px', boxShadow: '0 16px 30px rgba(17,17,17,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '680px' }}>
              <thead>
                <tr style={{ background: '#111111', color: '#fff', textAlign: 'left' }}>
                  <th style={cellStyle}>ID</th>
                  <th style={cellStyle}>RA</th>
                  <th style={cellStyle}>Nome do aluno</th>
                  <th style={cellStyle}>Idade</th>
                  <th style={cellStyle}>Série/Turma</th>
                </tr>
              </thead>
              <tbody>
                {alunos.map((aluno) => (
                  <tr key={aluno.id} style={{ color: '#3f3f46', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
                    <td style={cellStyle}>{aluno.id}</td>
                    <td style={cellStyle}>{aluno.ra}</td>
                    <td style={{ ...cellStyle, color: '#111111', fontWeight: 600 }}>{aluno.nome}</td>
                    <td style={cellStyle}>{aluno.idade}</td>
                    <td style={cellStyle}>{aluno.serieTurma}</td>
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
  padding: '16px 20px',
};
