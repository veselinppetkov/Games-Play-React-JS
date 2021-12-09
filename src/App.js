import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import DetailsGame from "./components/DetailsGame";
import CatalogGame from "./components/CatalogGame/CatalogGame";
import ErrorPage from "./components/ErrorPage";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(`/home`);

  const navChangePath = (path) => {
    setPage(path);
  };

  const router = {
    "/home": <WelcomeWorld />,
    "/login": <Login />,
    "/register": <Register />,
    "/create-game": <CreateGame />,
    "/edit/:id": <EditGame />,
    "/details/:id": <DetailsGame />,
    "/games": <CatalogGame />,
  };

  return (
    <div id="box">
      <Header navChangePath={navChangePath} />
      <main id="main-content">{router[page] || <ErrorPage />}</main>
    </div>
  );
}

export default App;
