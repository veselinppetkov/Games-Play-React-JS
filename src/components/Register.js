const Register = () => {
  return (
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
  );
};

export default Register;
