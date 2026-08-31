import Header from '../components/header';

export default function NotasAluno() {
  return (
    <>
      <Header />
      <main style={{ padding: '40px 24px', background: 'linear-gradient(180deg, #f5f5f5 0%, #f9f2f2 100%)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#fff', borderRadius: '24px', padding: '32px', boxShadow: '0 20px 40px rgba(17, 17, 17, 0.06)' }}>
          <h1 style={{ color: '#111111', marginBottom: '24px' }}>Cadastro de notas</h1>

          <form style={{ display: 'grid', gap: '20px' }}>
            <label style={{ display: 'grid', gap: '8px', color: '#111111', fontWeight: 600 }}>
              Aluno
              <select style={inputStyle}>
                <option>Selecione o aluno</option>
                <option>Ana Souza</option>
                <option>Pedro Lima</option>
                <option>Beatriz Costa</option>
              </select>
            </label>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
              <label style={{ display: 'grid', gap: '8px', color: '#111111', fontWeight: 600 }}>
                Matemática
                <input type="number" min="0" max="10" step="0.1" placeholder="0.0" style={inputStyle} />
              </label>
              <label style={{ display: 'grid', gap: '8px', color: '#111111', fontWeight: 600 }}>
                Português
                <input type="number" min="0" max="10" step="0.1" placeholder="0.0" style={inputStyle} />
              </label>
              <label style={{ display: 'grid', gap: '8px', color: '#111111', fontWeight: 600 }}>
                Ciências
                <input type="number" min="0" max="10" step="0.1" placeholder="0.0" style={inputStyle} />
              </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" style={buttonStyle}>Salvar notas</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

const inputStyle = {
  border: '1px solid rgba(17, 17, 17, 0.12)',
  borderRadius: '14px',
  padding: '12px 14px',
  fontSize: '1rem',
  outline: 'none',
  background: '#fff',
};

const buttonStyle = {
  background: 'linear-gradient(135deg, #111111 0%, #7f1d1d 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: '999px',
  padding: '14px 24px',
  fontWeight: 700,
  cursor: 'pointer',
};
