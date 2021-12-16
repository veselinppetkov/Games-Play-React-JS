import { deleteGameById } from "../../services/gameService";
import { useNavigate } from "react-router-dom";

const DetailsCard = ({ game, userInfo }) => {
  const navigate = useNavigate();

  const deleteHandler = (e) => {
    e.preventDefault();
    let res = window.confirm(`Are you sure you want to delete this game?`);
    if (res) {
      deleteGameById(game._id, userInfo.accessToken);
      console.log(`You have successfuly deleted ${game.title}`);
      navigate(`/`);
    }
  };
  return (
    <>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            <li className="comment">
              <p>Content: I rate this one quite highly.</p>
            </li>
            <li className="comment">
              <p>Content: The best game.</p>
            </li>
          </ul>
          <p className="no-comment">No comments.</p>
        </div>
        {userInfo._id === game._ownerId ? (
          <div className="buttons">
            <a href="#" className="button">
              Edit
            </a>
            <a href="#" className="button" onClick={deleteHandler}>
              Delete
            </a>
          </div>
        ) : null}
      </div>
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </>
  );
};

export default DetailsCard;
