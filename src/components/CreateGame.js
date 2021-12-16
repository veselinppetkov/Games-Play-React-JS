import { useNavigate } from "react-router-dom";
import { createGame } from "../services/gameService";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const CreateGame = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const token = userInfo.accessToken;

  const onCreate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get(`title`).trim();
    const category = formData.get(`category`).trim();
    const maxLevel = formData.get(`maxLevel`).trim();
    const imageUrl = formData.get(`imageUrl`).trim();
    const summary = formData.get(`summary`).trim();

    const gameInfo = { title, category, maxLevel, imageUrl, summary };

    createGame(gameInfo, token);
    navigate(`/`);
  };

  return (
    <section id="create-page" d="auth">
      <form onSubmit={onCreate} id="create">
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            placeholder="1"
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary"></textarea>
          <input className="btn submit" type="submit" value="Create Game" />
        </div>
      </form>
    </section>
  );
};

export default CreateGame;
