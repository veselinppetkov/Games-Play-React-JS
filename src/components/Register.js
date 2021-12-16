import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginRequest, registerRequest } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));

    registerRequest(email, password).then(({ email, password }) => {
      loginRequest(email, password);
      navigate(`/`);
    });
  };

  return (
    <section id="register-page" className="content auth">
      <form onSubmit={registerHandler} id="register">
        <div className="container">
          <div className="brand-logo"></div>
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

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
