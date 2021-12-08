const CatalogGame = () => {
  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      <div d="allGames">
        <div d="allGames-info">
          <img src="./images/avatar-1.jpg" />
          <h6>Action</h6>
          <h2>Cover Fire</h2>
          <a href="#" d="details-button">
            Details
          </a>
        </div>
      </div>
      <div d="allGames">
        <div d="allGames-info">
          <img src="./images/avatar-1.jpg" />
          <h6>Action</h6>
          <h2>Zombie lang</h2>
          <a href="#" d="details-button">
            Details
          </a>
        </div>
      </div>
      <div d="allGames">
        <div d="allGames-info">
          <img src="./images/avatar-1.jpg" />
          <h6>Action</h6>
          <h2>MineCraft</h2>
          <a href="#" d="details-button">
            Details
          </a>
        </div>
      </div>

      <h3 d="no-articles">No articles yet</h3>
    </section>
  );
};

export default CatalogGame;
