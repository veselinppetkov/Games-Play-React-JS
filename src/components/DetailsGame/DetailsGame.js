import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../services/gameService";
import DetailsCard from "./DetailsCard";

const DetailsGame = () => {
  const [game, setGame] = useState({});
  const { gameId } = useParams();

  useEffect(() => {
    getGameById(gameId).then((data) => setGame(data));
  }, []);

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <DetailsCard key={game._id} game={game} />
    </section>
  );
};

export default DetailsGame;
