import { Link } from "react-router-dom";

const Header = ({ email }) => {
  const userNav = (
    <div id="user">
      <Link to="/create-game">Create Game</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
  const guestNav = (
    <div id="guest">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
  return (
    <header>
      <h1>
        <Link className="home" to="/">
          GamesPlay
        </Link>
      </h1>
      <nav>
        <Link to="/games">All games</Link>
        {email ? userNav : guestNav}
      </nav>
    </header>
  );
};

export default Header;
