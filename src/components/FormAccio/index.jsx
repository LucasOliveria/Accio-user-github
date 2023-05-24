import { useEffect, useState } from "react";
import optIcon from "../../assets/opt-icon.svg";
import apiIbge from '../../services/api-ibge';
import ModalLanguages from "../ModalLanguages";
import "./style.css";

function FormAccio() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedStates, setSelectedStates] = useState("");
  const [selectedCities, setSelectedCities] = useState("");
  const [appearModalLanguages, setAppearModalLanguages] = useState(false);

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
    if (!selectedStates || selectedStates === "Selecione o estado") {
      setCities([{ id: 1, nome: "Selecione a cidade" }]);
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
    <form >
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

      <div
        className='btn-languages'
        onClick={() => setAppearModalLanguages(!appearModalLanguages)}
      >
        <span>Selecione as linguagens</span>

        <img
          src={optIcon}
          alt="opções"
          style={{ transform: `${appearModalLanguages ? "rotate(45deg)" : "rotate(-90deg)"}` }}
        />
      </div>

      {appearModalLanguages && <ModalLanguages />}

      <button>Accio</button>
    </form>
  )
}

export default FormAccio;