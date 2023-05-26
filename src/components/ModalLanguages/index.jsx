import { useState } from "react";
import { languages } from '../../data/languages';
import "./style.css";

function ModalLanguages() {
  const [arrLanguages, setArrLanguages] = useState(languages);
  const [languagesSelected, setlanguagesSelected] = useState([])

  function handleSelectLanguage(language) {
    // const localArrLanguages = [...arrLanguages];

    // const languageSelected = localArrLanguages.find((language) => language.id === id);

    const localLanguagesSelected = [...languagesSelected];

    if (!language.selected) {
      language.selected = true;

      localLanguagesSelected.push(language.name);

      setlanguagesSelected(localLanguagesSelected);

      return;
    }

    language.selected = false;

    const languageIndexToExclude = localLanguagesSelected.indexOf(language.name);

    localLanguagesSelected.splice(languageIndexToExclude, 1);

    setlanguagesSelected(localLanguagesSelected);
  }

  console.log(languagesSelected);

  return (
    <div className="languages">
      <div className="content-language">
        {arrLanguages.map((language) => (
          <div
            key={language.id}
            className={`language flip-in-hor-bottom ${language.selected ? "selected-true" : "selected-false"}`}
            onClick={() => handleSelectLanguage(language)}
          >
            {language.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModalLanguages;