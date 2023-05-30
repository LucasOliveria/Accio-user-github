import "./style.css";
import wand from "../../assets/wand.png";

function NoResults() {
  return (
    <div className="container-no-results">
      <div className="container-message">
        <img src={wand} alt="wand" />
        <h2>Nenhum resultado encontrado!</h2>
        <h3>Tente outros parâmetros de busca.</h3>
      </div>
    </div>
  )
}

export default NoResults;