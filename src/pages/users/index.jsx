import './style.css';
import { useNavigate } from "react-router-dom";

function Users({ usersList, setUsersList, entranceExit, setEntranceExit }) {
  const navigate = useNavigate();

  function handleGoBack() {
    setEntranceExit(false);

    setTimeout(() => {
      navigate("/");
      setUsersList([]);
    }, 900);
  }
  console.log(usersList);
  return (
    <div className="container-main">
      <div className="container-background container-users">
        <div className={` users ${entranceExit ? "slide-in-bottom" : "slide-out-bottom"}`}>
          <h1>Usuários</h1>

          {usersList.map((user) => (
            <div className='user-card'>
              <img src={user.avatar_url
              } alt="avatar" />

              <div className='info-user'>
                <h3>
                  {user.login}
                </h3>
                <a
                  href={user.html_url}
                  target="_blank"
                >
                  <div className='visit-btn'>
                    Visitar
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleGoBack}>Voltar</button>
      </div>
    </div>
  )
}

export default Users;
