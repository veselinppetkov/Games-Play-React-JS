function App() {
  return (
    <div id="box">
      <header>
        <h1>
          <a d="home" href="#">
            GamesPlay
          </a>
        </h1>
        <nav>
          <a href="#">All games</a>
          <div id="user">
            <a href="#">Create Game</a>
            <a href="#">Logout</a>
          </div>
          <div id="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </nav>
      </header>

      <main id="main-content"></main>

      <section id="login-page" d="auth">
        <form id="login">
          <div d="container">
            <div d="brand-logo"></div>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Sokka@gmail.com"
            />

            <label htmlFor="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" />
            <input type="submit" d="btn submit" value="Login" />
            <p d="field">
              <span>
                If you don't have profile click <a href="#">here</a>
              </span>
            </p>
          </div>
        </form>
      </section>

      <section id="register-page" d="content auth">
        <form id="register">
          <div d="container">
            <div d="brand-logo"></div>
            <h1>Register</h1>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="maria@email.com"
            />

            <label htmlFor="pass">Password:</label>
            <input type="password" name="password" id="register-password" />

            <label htmlFor="con-pass">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
            />

            <input d="btn submit" type="submit" value="Register" />

            <p d="field">
              <span>
                If you already have profile click <a href="#">here</a>
              </span>
            </p>
          </div>
        </form>
      </section>

      <section id="create-page" d="auth">
        <form id="create">
          <div d="container">
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
            <input d="btn submit" type="submit" value="Create Game" />
          </div>
        </form>
      </section>

      <section id="edit-page" d="auth">
        <form id="edit">
          <div d="container">
            <h1>Edit Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" />

            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" />

            <label htmlFor="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" />

            <label htmlFor="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" />

            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input d="btn submit" type="submit" value="Edit Game" />
          </div>
        </form>
      </section>

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
            Set in a world where fantasy creatures live side by side with
            humans. A human cop is forced to work with an Orc to find a weapon
            everyone is prepared to kill for. Set in a world where fantasy
            creatures live side by side with humans. A human cop is forced to
            work with an Orc to find a weapon everyone is prepared to kill for.
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
    </div>
  );
}

export default App;
