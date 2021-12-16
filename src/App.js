import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import CreateGame from "./components/CreateGame";
import CatalogGame from "./components/CatalogGame/CatalogGame";
import DetailsGame from "./components/DetailsGame/DetailsGame";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<WelcomeWorld />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route path="/games" element={<CatalogGame />} />
          <Route path="/logout" element={<ErrorPage />} />
          <Route path="/details/:gameId" element={<DetailsGame />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
