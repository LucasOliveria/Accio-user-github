import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/users";
import { useState } from "react";

function AllRoutes() {
  const [usersList, setUsersList] = useState([]);
  const [entranceExit, setEntranceExit] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home
          setUsersList={setUsersList}
          entranceExit={entranceExit}
          setEntranceExit={setEntranceExit}
        />}
      />
      <Route
        path="/users"
        element={<Users
          usersList={usersList}
          setUsersList={setUsersList}
          entranceExit={entranceExit}
          setEntranceExit={setEntranceExit}
        />}
      />
    </Routes>
  )
}

export default AllRoutes;