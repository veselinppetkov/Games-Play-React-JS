import { useState, useEffect } from "react";
import { getAllGames } from "../../services/gameService";
import CardGame from "./CardGame";

const CatalogGame = ({ navChangePath }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames().then((games) => setGames(games));
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {games.length == 0 ? (
        <div className="lds-dual-ring"></div>
      ) : (
        games.map((e) => <CardGame key={e._id} game={e} />)
      )}
    </section>
  );
};

export default CatalogGame;
