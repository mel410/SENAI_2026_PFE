/*import './estilos.css';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;*/

import './estilos.css';
import Header from './components/Header.jsx';
import Noticias from './components/noticias.jsx';
import { useContext } from 'react';
import { TemaContexto } from './contexts/TemaContexto.jsx';

function App() {
  const { tema } = useContext(TemaContexto);

  return (
    <>
      <Header />
      <Noticias tema={tema} />
    </>
  );
}

export default App;
