import { useEffect } from "react";
import "./style.css";

function ModalLanguages({ arrLanguages, setArrLanguages, languagesSelected, setlanguagesSelected }) {


  function handleSelectLanguage(language) {
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