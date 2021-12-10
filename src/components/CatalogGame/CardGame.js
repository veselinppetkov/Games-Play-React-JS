const CardGame = ({ game, navChangePath }) => {
  const onDetailsClick = (e) => {
    e.preventDefault();
    navChangePath(`/details/${game._id}`);
  };

  return (
    <div className="allGames-info">
      <img src={game.imageUrl} />
      <h6>{game.category}</h6>
      <h2>{game.title}</h2>
      <a
        href={`/details/${game._id}`}
        onClick={onDetailsClick}
        className="details-button"
      >
        Details
      </a>
    </div>
  );
};

export default CardGame;
