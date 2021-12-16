import { Link, useNavigate } from "react-router-dom";
import loginRequest from "../services/authService";

const Login = () => {
  const navigation = useNavigate();
  function onLoginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get(`email`).trim();
    const password = formData.get(`password`).trim();

    console.log(email, password);
    loginRequest(email, password);
    navigation(`/`);
  }

  return (
    <section id="login-page" className="auth">
      <form onSubmit={onLoginSubmit} className="login">
        <div className="container">
          <div className="brand-logo"></div>
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
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>
              If you don't have profile click <Link to="/register">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
