import { useState } from 'react';
import wand from "../../../public/wand.png"
import cat from "../../assets/cat.png"
import './App.css';

function App() {

  return (
    <div className="container-main">
      <div className="left-container">
        <h1>
          Accio Users GitHub
          <img src={cat} alt="cat" />
        </h1>

        <div className='instructions'>
          <h2>
            Busque usuários no GitHub <br /> de uma forma rápida e prática
          </h2>
          <p>
            Escolha uma <span className='highlighted-word'> localidade
            </span>.
          </p>
          <p>
            Selecione uma ou mais <span className='highlighted-word'>linguagens de programação
            </span> desejadas e busque os melhores.
          </p>
          <p>
            Lance um <span className='highlighted-word'>Accio</span>!
          </p>
        </div>
        <div></div>

        <div className='icon-reference'>
          <a
            href="https://br.freepik.com/vetores-gratis/varinha-magica-com-fundo-vermelho-da-fuga_1110451.htm#query=varinha%20magica&position=10&from_view=keyword&track=ais" target='_black'
          >
            Image by gluiki - Freepik
          </a>
        </div>
      </div>
      <div className="right-container">
        <form>

          <div className="locations">
            <select name="select-state" id="">
              <option value="">Selecione o estado</option>
            </select>
            <select name="select-city" id="">
              <option value="">Selecione a cidade</option>
            </select>

          </div>

          <div className="languages">

          </div>

          <button>Accio</button>
        </form>
      </div>
    </div>
  )
}

export default App;
