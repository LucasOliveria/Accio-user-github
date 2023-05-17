import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-main">
      <div className="left-container">
        <h1>Accio Users GitHub</h1>

        <div className='instructions'>
          <h2>
            Busque usuários no GitHub <br /> de uma forma rápida e prática
          </h2>
          <p>
            Escolha uma <span className='highlighted-word'> localidade
            </span>.
          </p>
          <p>Selecione uma ou mais <span className='highlighted-word'>linguagens de programação
          </span> desejadas e busque os melhores.</p>
          <p>
            Lance um <span className='highlighted-word'>Accio</span>!
          </p>
        </div>
      </div>
      <div className="right-container">
      </div>
    </div>
  )
}

export default App;
