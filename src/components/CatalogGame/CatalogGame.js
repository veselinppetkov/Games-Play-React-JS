import { useState, useEffect, lazy, Suspense } from "react";
import { getAllGames } from "../../services/gameService";
const CardGame = lazy(() => import("./CardGame"));

const CatalogGame = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames().then((games) => setGames(games));
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {games.length == 0 ? (
          <div className="lds-dual-ring"></div>
        ) : (
          games.map((e) => <CardGame key={e._id} game={e} />)
        )}
      </Suspense>
    </section>
  );
};

export default CatalogGame;
