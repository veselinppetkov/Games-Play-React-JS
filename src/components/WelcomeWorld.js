import { useState, useEffect } from "react";
import { getLatestGames } from "../services/gameService";
import LatestGames from "./LatestGames";

const WelcomeWorld = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((game) => setGames(game));
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>All new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games</h1>
        {games.length == 0 ? (
          <div className="lds-dual-ring"></div>
        ) : (
          games.map((game) => <LatestGames key={game._id} game={game} />)
        )}
      </div>
    </section>
  );
};

export default WelcomeWorld;
