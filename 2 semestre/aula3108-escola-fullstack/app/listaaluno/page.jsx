import Header from '../components/header';

const alunos = [
  { nome: 'Ana Souza', turma: '1A', responsavel: 'Mariana Souza' },
  { nome: 'Pedro Lima', turma: '2B', responsavel: 'Carlos Lima' },
  { nome: 'Beatriz Costa', turma: '3C', responsavel: 'Sandra Costa' },
  { nome: 'Lucas Ferreira', turma: '5A', responsavel: 'João Ferreira' },
];

export default function ListaAluno() {
  return (
    <>
      <Header />
      <main style={{ padding: '40px 24px', background: 'linear-gradient(180deg, #f5f5f5 0%, #f9f2f2 100%)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ color: '#111111', marginBottom: '24px' }}>Lista de alunos</h1>

          <div style={{ display: 'grid', gap: '18px' }}>
            {alunos.map((aluno) => (
              <div key={aluno.nome} style={{ background: '#fff', borderRadius: '20px', padding: '20px 24px', boxShadow: '0 16px 30px rgba(17,17,17,0.04)', display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <div>
                  <h3 style={{ color: '#111111', marginBottom: '6px' }}>{aluno.nome}</h3>
                  <p style={{ color: '#3f3f46', margin: 0 }}>Turma: {aluno.turma}</p>
                </div>
                <div style={{ color: '#7f1d1d', fontWeight: 700, alignSelf: 'center' }}>
                  Responsável: {aluno.responsavel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
