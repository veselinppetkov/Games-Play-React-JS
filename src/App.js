import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import DetailsGame from "./components/DetailsGame/DetailsGame";
import CatalogGame from "./components/CatalogGame/CatalogGame";
import ErrorPage from "./components/ErrorPage";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(`/home`);

  const navChangePath = (path) => {
    setPage(path);
  };

  const router = (path) => {
    const [_, rootPath, argument] = path.split("/");

    const routes = {
      "/home": <WelcomeWorld navChangePath={navChangePath} />,
      "/login": <Login />,
      "/register": <Register />,
      "/create-game": <CreateGame />,
      "/edit/:id": <EditGame />,
      "/details": <DetailsGame id={argument} />,
      "/games": <CatalogGame navChangePath={navChangePath} />,
    };

    return routes[`/${rootPath}`];
  };

  return (
    <div id="box">
      <Header navChangePath={navChangePath} />
      <main id="main-content">{router(page) || <ErrorPage />}</main>
    </div>
  );
}

export default App;
