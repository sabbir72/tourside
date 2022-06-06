import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./topBar.css";


const TopBar = () => {
  const {user, dispatch}=useContext(Context);
  const PF="http://localhost:5000/images/"

  const handleLogout =()=>{
     dispatch({type: "LOGOUT"})
  }
  return (
    <div className="top">
      <div className="topLeft">
        <h1 className="logo">TRAVEL BLOG</h1>
      </div>
      <div className="topCenter">
        <ul className="toplist">
          <li className="topListItem">
            <Link className="menuBar" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="menuBar" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="menuBar" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="menuBar" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
           {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
      <a target="blank" href="https://www.facebook.com/mind.fresh.travelling"><i className="topIcon fab fa-facebook-square"></i></a>
        <a target="blank" href="https://www.facebook.com/mind.fresh.travelling"><i className="topIcon fab fa-twitter-square"></i></a>
        <a target="blank" href="https://www.facebook.com/mind.fresh.travelling"><i className="topIcon fab fa-instagram-square"></i></a>
        <i className="topSearch fas fa-search"></i>
      </div>
      <div className="TopImg">
               
        {user ? (
        <Link to="/setting">
          <img
            className="topImg"
            src={PF +user.profilePic}
            alt=""
            srcset=""
          />
          </Link>
        ) : (
          <>
            <ul className="toplist">
              <li className="topListItem" >
                <Link className="menuBar" to="/login">
                  LOGIN
                </Link>
              </li>
              
              <li className="topListItem">
                <Link className="menuBar" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;
