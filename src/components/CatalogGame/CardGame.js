import { Link } from "react-router-dom";

const CardGame = ({ game }) => {
  return (
    <div className="allGames-info">
      <img src={game.imageUrl} />
      <h6>{game.category}</h6>
      <h2>{game.title}</h2>
      <Link to={`/details/${game._id}`} className="details-button">
        Details
      </Link>
    </div>
  );
};

export default CardGame;
