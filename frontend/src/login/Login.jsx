import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" 
        className="loginInput" 
        placeholder="Your username" 
        ref={userRef}
        />

        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Your Password"
          ref={passwordRef}
        />
        {/* <div className="remember">
          <input type="checkbox" className="box" />
          <p className="loginRem">Remember me</p>
          <p className="loginForget">Forgot Password ?</p>
        </div> */}

        <button className="loginBtn" type="submit" disabled={isFetching}>
          LOGIN
        </button>
      </form>

      <button className="loginReg">
        <Link className="menuBar" to="/register">
          REGISTER
        </Link>
      </button>
      {/* <p className="loginRegis">
        Don't have an account ?
        <Link className="menubar" to="/register">
          REGISTER
        </Link>
      </p> */}
    </div>
  );
};

export default Login;
