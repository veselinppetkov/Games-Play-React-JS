import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import CreateGame from "./components/CreateGame";
import CatalogGame from "./components/CatalogGame/CatalogGame";
import DetailsGame from "./components/DetailsGame/DetailsGame";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create-game" component={CreateGame} />
          <Route path="/games" component={CatalogGame} />
          <Route path="/logout" component={ErrorPage} />
          <Route path="/details/:gameId" component={DetailsGame} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
