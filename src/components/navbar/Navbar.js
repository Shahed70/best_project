import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_TOKEN } from "../../redux-store/actionTypes/authTypes";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch({type:REMOVE_TOKEN, payload: ""})
  }
  const links = user ? (
    <>
       <li>
        <Link to="/create">Create Post</Link>
      </li>
      <li>
        <Link to="/dashboard">{user.name}</Link>
      </li>
      <li>
        <span onClick={handleLogout}>Logout</span>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__row">
          <div className="navbar__left">
            <Link to="/">
              <img src="images/logo.png" alt="" />
            </Link>
          </div>
          <div className="navbar__right">{links}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
