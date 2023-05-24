import { useState } from "react";
import { languages } from '../../data/languages';
import "./style.css";

function ModalLanguages() {
  const [arrLanguages, setArrLanguages] = useState(languages);

  return (
    <div className="languages">
      <div className="content-language">
        {arrLanguages.map((language) => (
          <div
            key={language.id}
            className={`language flip-in-hor-bottom ${language.selected ? "selected-true" : "selected-false"}`}
          >
            {language.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModalLanguages;