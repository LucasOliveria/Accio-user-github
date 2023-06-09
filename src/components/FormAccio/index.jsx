import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import optIcon from "../../assets/opt-icon.svg";
import { languages } from '../../data/languages';
import apiGitHub from "../../services/api-git-hub";
import apiIbge from '../../services/api-ibge';
import { setItem } from "../../utils/storage";
import ModalLanguages from "../ModalLanguages";
import "./style.css";

function FormAccio({
  setUsersList,
  setEntranceExit,
  openModal
}) {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedStates, setSelectedStates] = useState("");
  const [selectedCities, setSelectedCities] = useState("");
  const [appearModalLanguages, setAppearModalLanguages] = useState(false);
  const [languagesList, setLanguagesList] = useState(languages);
  const [languagesSelected, setlanguagesSelected] = useState([]);

  async function getStates() {
    try {
      const response = await apiIbge.get("/estados?orderBy=nome");

      setStates([{ id: 1, nome: "Selecione o estado" }, ...response.data]);
    } catch (error) {
      toast.error("ERRO 500 - Tente novamente mais tarde");
    }
  }

  async function getCities() {
    if (!selectedStates || selectedStates === "Selecione o estado") {
      setCities([{ id: 1, nome: "Selecione a cidade" }]);
      return;
    }

    const stateObject = states.find((state) => state.nome === selectedStates);

    try {
      const response = await apiIbge.get(`/estados/${stateObject.id}/distritos?orderBy=nome`);

      if (stateObject.id === 35) {
        return setCities([{ id: 1, nome: "Selecione a cidade" }, { id: 2, nome: "São Paulo" }, ...response.data]);
      }

      setCities([{ id: 1, nome: "Selecione a cidade" }, ...response.data]);
    } catch (error) {
      toast.error("ERRO 500 - Tente novamente mais tarde");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!selectedStates || selectedStates === "Selecione o estado") {
      return toast.info("Selecione um estado para prosseguir.");
    }

    if (!selectedCities || selectedCities === "Selecione a cidade") {
      return toast.info("Selecione uma cidade para prosseguir.");
    }

    if (!languagesSelected.length) {
      return toast.info("Selecione pelo menos uma linguagem para prosseguir.");
    }
    let stringLanguage = "";

    for (const language of languagesSelected) {
      stringLanguage += `language:${language} `
    }

    const id = toast.loading("Por favor aguarde...")

    try {
      const response = await apiGitHub.get(`/search/users?q=location:"${selectedCities}" ${stringLanguage.trim()}`);

      setUsersList(response.data.items);

      setItem("accio", "users");

      clearForm();

      setEntranceExit(true);

      setTimeout(() => {
        navigate("/users");
      }, 900);

      toast.update(id, {
        render: "Accio Users!",
        type: "success",
        isLoading: false,
        autoClose: 1000,
        closeOnClick: true
      });
    } catch (error) {
      toast.update(id, {
        render: "ERRO 500 - Tente novamente mais tarde",
        type: "error",
        isLoading: false,
        autoClose: 1000,
        closeOnClick: true
      });
    }
  }

  function clearForm() {
    setSelectedStates("");
    setSelectedCities("");
    setlanguagesSelected([]);
    languagesList.forEach((language) => language.selected = false);
  }

  useEffect(() => {
    getStates();
  }, []);

  useEffect(() => {
    getCities();
  }, [selectedStates]);

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
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

        {appearModalLanguages && (
          <ModalLanguages
            languagesList={languagesList}
            languagesSelected={languagesSelected}
            setlanguagesSelected={setlanguagesSelected}
          />
        )}

        <button>Accio</button>
      </form>
    </div>
  )
}

export default FormAccio;