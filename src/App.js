import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import CatalogGame from "./components/CatalogGame/CatalogGame";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/create-game" exact component={CreateGame} />
          <Route path="/games" exact component={CatalogGame} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
