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
        <h3 className="no-articles">No games yet</h3>
      ) : (
        games.map((e) => (
          <CardGame key={e._id} game={e} navChangePath={navChangePath} />
        ))
      )}
    </section>
  );
};

export default CatalogGame;
