import { useEffect, useState } from 'react';
import cat from "../../assets/cat.png"
import apiIbge from '../../services/api-ibge';
import { languages } from '../../data/languages';
import './App.css';

function App() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([{ id: 1, nome: "Selecione a cidade" }]);
  const [selectedStates, setSelectedStates] = useState("");
  const [selectedCities, setSelectedCities] = useState("");
  const [arrLanguages, setArrLanguages] = useState(languages);
  const [appear, setAppear] = useState(false);

  async function getStates() {
    try {
      const response = await apiIbge.get("/estados");

      const statesAlphabeticalOrder = response.data.sort((a, b) => a.nome.localeCompare(b.nome));

      setStates([{ id: 1, nome: "Selecione o estado" }, ...statesAlphabeticalOrder]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCities() {
    if (!selectedStates) {
      return;
    }

    const stateObject = states.find((state) => state.nome === selectedStates);

    try {
      const response = await apiIbge.get(`/estados/${stateObject.sigla}/distritos`);

      const citiesAlphabeticalOrder = response.data.sort((a, b) => a.nome.localeCompare(b.nome));

      setCities(citiesAlphabeticalOrder);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStates();
  }, []);

  useEffect(() => {
    getCities();
  }, [selectedStates]);

  return (
    <div className="container-main">
      <div className="left-container">
        <h1>
          Accio Users
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
            <select
              name="select-state"
              onChange={(event) => setSelectedStates(event.target.value)}
              value={selectedStates}
            >
              {states.map((state) => (
                <option
                  key={state.id}
                  value={state.nome}
                >
                  {state.nome}
                </option>
              ))}
            </select>

            <select
              name="select-city"
              onChange={(event) => setSelectedCities(event.target.value)}
              value={selectedCities}
            >
              {cities.map((city) => (
                <option
                  key={city.id}
                  value={city.nome}
                >
                  {city.nome}
                </option>
              ))}
            </select>

          </div>

          <div className="languages">
            <span>Selecione as linguagens</span>
            <div className="content-language">
              {arrLanguages.map((language) => (
                <div
                  key={language.id}
                  className="language"
                >
                  {language.name}
                </div>
              ))}
            </div>
          </div>

          <button>Accio</button>
        </form>
      </div>
    </div>
  )
}

export default App;
