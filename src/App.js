import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import DetailsGame from "./components/DetailsGame/DetailsGame";
import CatalogGame from "./components/CatalogGame/CatalogGame";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <main id="main-content">
        <Router>
          <Switch>
            <Route path="/" exact component={WelcomeWorld} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/create-game" exact component={CreateGame} />
            <Route path="/games" exact component={CatalogGame} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
