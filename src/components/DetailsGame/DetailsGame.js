import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../services/gameService";
import { AuthContext } from "../../contexts/AuthContext";
import DetailsCard from "./DetailsCard";

const DetailsGame = () => {
  const { userInfo } = useContext(AuthContext);
  const [game, setGame] = useState({});
  const { gameId } = useParams();

  useEffect(() => {
    getGameById(gameId).then((data) => setGame(data));
  }, []);

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <DetailsCard key={game._id} game={game} userInfo={userInfo} />
    </section>
  );
};

export default DetailsGame;
