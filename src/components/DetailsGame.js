const DetailsGame = () => {
  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div d="info-section">
        <div d="game-header">
          <img d="game-img" src="images/MineCraft.png" />
          <h1>Bright</h1>
          <span d="levels">MaxLevel: 4</span>
          <p d="type">Action, Crime, Fantasy</p>
        </div>

        <p d="text">
          Set in a world where fantasy creatures live side by side with humans.
          A human cop is forced to work with an Orc to find a weapon everyone is
          prepared to kill for. Set in a world where fantasy creatures live side
          by side with humans. A human cop is forced to work with an Orc to find
          a weapon everyone is prepared to kill for.
        </p>

        <div d="details-comments">
          <h2>Comments:</h2>
          <ul>
            <li d="comment">
              <p>Content: I rate this one quite highly.</p>
            </li>
            <li d="comment">
              <p>Content: The best game.</p>
            </li>
          </ul>
          <p d="no-comment">No comments.</p>
        </div>

        <div d="buttons">
          <a href="#" d="button">
            Edit
          </a>
          <a href="#" d="button">
            Delete
          </a>
        </div>
      </div>

      <article d="create-comment">
        <label>Add new comment:</label>
        <form d="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input d="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
};

export default DetailsGame;
