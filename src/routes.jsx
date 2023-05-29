import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/users";
import { getItem } from "./utils/storage";

function ProtectedRoute({ redirectTo }) {
  const authorized = getItem("accio");

  return authorized ? <Outlet /> : <Navigate to={redirectTo} />
}

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

      <Route element={<ProtectedRoute redirectTo="/" />}>
        <Route
          path="/users"
          element={<Users
            usersList={usersList}
            setUsersList={setUsersList}
            entranceExit={entranceExit}
            setEntranceExit={setEntranceExit}
          />}
        />
      </Route>
    </Routes>
  )
}

export default AllRoutes;