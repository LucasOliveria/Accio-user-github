import "./style.css";
import { languages } from '../../data/languages';
import { useState } from "react";

function ModalLanguages() {
  const [arrLanguages, setArrLanguages] = useState(languages);

  return (
    <div className="languages">
      <div className="content-language">
        {arrLanguages.map((language) => (
          <div
            key={language.id}
            className="language flip-in-hor-bottom"
          >
            {language.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModalLanguages;