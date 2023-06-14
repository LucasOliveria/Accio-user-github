import { useEffect, useState } from "react";
import cat from "../../assets/cat.png";
import close from "../../assets/close.svg";
import instructionMenu from "../../assets/menu.svg";
import FormAccio from '../../components/FormAccio';
import './style.css';

function Home({ setUsersList, entranceExit, setEntranceExit }) {
  const [openModal, setopenModal] = useState(false);


  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  }, [openModal]);

  return (
    <main className="container-main">
      <div className="container-background">
        <div className={`left-container ${!entranceExit ? "slide-in-top" : "slide-out-top"}`}>
          {openModal ?
            <img
              src={close}
              alt="close"
              onClick={() => setopenModal(false)}
            />
            :
            <div className="btn-menu">
              <img
                src={instructionMenu}
                alt="Instruction"
                onClick={() => setopenModal(true)}
              />
              <h3>Instruções</h3>
            </div>
          }
          <h1>
            Accio Users
            <img src={cat} alt="cat" />
          </h1>

          <div className={`${openModal && "modal slide-in-top"}`}>
            <div className="instructions">
              <h2>
                Busque usuários no GitHub <br /> de uma forma rápida e prática
              </h2>
              <p>
                Escolha uma <span className='highlighted-word'> localidade
                </span>.
              </p>
              <p>
                Selecione uma ou mais <span className='highlighted-word'>linguagens de programação
                </span> desejadas.
              </p>
              <p>
                Encontre os perfis que melhor <br /> correspondem a sua busca.
              </p>
              <p>
                Lance um <span className='highlighted-word'>Accio</span>!
              </p>
            </div>
          </div>
        </div>
        <div className={`right-container ${!entranceExit ? "slide-in-top" : "slide-out-top"}`} >
          <FormAccio
            setUsersList={setUsersList}
            setEntranceExit={setEntranceExit}
          />
          <div className='icon-reference'>
            <a
              href="https://br.freepik.com/vetores-gratis/varinha-magica-com-fundo-vermelho-da-fuga_1110451.htm#query=varinha%20magica&position=10&from_view=keyword&track=ais" target='_black'
            >
              Image by gluiki - Freepik
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;