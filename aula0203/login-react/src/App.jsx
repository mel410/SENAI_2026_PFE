import './App.css'
import logSesi from './assets/img/Sesi-SP.jpg';
import logSenai from './assets/img/SENAI_São_Paulo_logo.png';


export default function App() {
  
 return (
  <>
  <div className="container">
  <img src={logSesi} alt="logo do Sesi" className="logo" />
  <img src={logSenai} alt="logo do Senai" className="logo" />
  <h1 className='titulo'>Login</h1>
  <span className='subtitulo'>para continuar</span>
  <label htmlFor="nome" className="label">Nome</label>
  <input type="text" id="nome" className="input" placeholder="Seu nome" />
  <label htmlFor="senha" className="label">Senha</label>
  <input type="text" id="senha" className="input" placeholder="******" />
  <button className="botao">Lon in</button>
  <a className='subtitulo'>Esqueceu a senha</a>
  <a className='subtitulo'>Cadastre-se</a>
  </div>
  </>
  )
}

//export default App;
