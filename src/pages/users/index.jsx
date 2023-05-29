import { useNavigate } from "react-router-dom";
import { removeItem } from '../../utils/storage';
import './style.css';

function Users({ usersList, setUsersList, entranceExit, setEntranceExit }) {
  const navigate = useNavigate();
  let count = 0;

  function handleGoBack() {
    setEntranceExit(false);

    setTimeout(() => {
      removeItem("accio");
      navigate("/");
      setUsersList([]);
    }, 900);
  }

  window.addEventListener("beforeunload", () => removeItem("accio"));

  window.addEventListener("popstate", () => {
    removeItem("accio")
    setEntranceExit(false);
  });

  return (
    <div className="container-main">
      <div className="container-background container-users">

        <div className={`${entranceExit ? "slide-in-bottom" : "slide-out-bottom"}`}>
          <h1>Usuários</h1>
        </div>
        <div className={`users ${entranceExit ? "slide-in-bottom" : "slide-out-bottom"}`}>

          {usersList.map((user) => (
            <a
              href={user.html_url}
              target="_blank"
              key={user.id}
            >
              <div
                className='user-card'
              >
                <img
                  src={user.avatar_url
                  }
                  alt="avatar"
                />

                <div className='info-user'>
                  <h3 title={user.login}>
                    {user.login}
                  </h3>

                </div>
                <span>{`# ${++count}`}</span>
              </div>
            </a>
          ))}
        </div>

        <button onClick={handleGoBack}>Voltar</button>
      </div>
    </div>
  )
}

export default Users;
