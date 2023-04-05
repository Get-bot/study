import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/sliceIndex";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter a valid email and password");
      return;
    }

    dispatch(authActions.login());
  };

  const loginForm = (
    <form onSubmit={loginHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button>Login</button>
    </form>
  );

  return (
    <main className={classes.auth}>
      <section>
        {isAuth ? <p>You are logged in!</p> : loginForm}
      </section>
    </main>
  );
};

export default Auth;
