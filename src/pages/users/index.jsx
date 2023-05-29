import { useEffect, useState } from 'react';
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

  useEffect(() => {
    window.addEventListener("beforeunload", () => removeItem("accio"));

    return () => {
      window.removeEventListener("beforeunload", () => removeItem("accio"));
    }
  }, [])

  return (
    <div className="container-main">
      <div className="container-background container-users">

        <div className={`${entranceExit ? "slide-in-bottom" : "slide-out-bottom"}`}>
          <h1>Usuários</h1>
        </div>
        <div className={`users ${entranceExit ? "slide-in-bottom" : "slide-out-bottom"}`}>

          {usersList.map((user) => (
            <div
              className='user-card'
              key={user.id}
            >
              <img
                src={user.avatar_url
                }
                alt="avatar"
              />

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
              <span>{`# ${++count}`}</span>
            </div>
          ))}
        </div>

        <button onClick={handleGoBack}>Voltar</button>
      </div>
    </div>
  )
}

export default Users;
