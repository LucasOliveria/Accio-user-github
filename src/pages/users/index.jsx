import './style.css';
import { useNavigate } from "react-router-dom";

function Users({ usersList, setUsersList, entranceExit, setEntranceExit }) {
  const navigate = useNavigate();

  function navegar() {
    setEntranceExit(false);

    setTimeout(() => {
      navigate("/");
    }, 900);
  }
  console.log(usersList);
  return (
    <div className="container-main">
      <div className="container-background container-users">
        <div className={` ${entranceExit ? "slide-in-bottom" : "slide-out-bottom"}`}>
          <h1>Usuários Encontrados</h1>
          <button onClick={navegar}>Voltar</button>
        </div>
      </div>
    </div>
  )
}

export default Users;
