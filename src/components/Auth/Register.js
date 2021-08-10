import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux-store/actions";
import { useEffect } from "react";
const Register = () => {
  const dispatch = useDispatch();
  const {loading, registerErrors, user, success} = useSelector((state) => state.auth);
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const newState = { ...users, [e.target.name]: e.target.value };
    setUsers(newState);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerAction(users));
  };

 useEffect(() => {
  if(registerErrors.length > 0){
     registerErrors.map( err => toast.error(err.msg))
  }
 }, [registerErrors, user])
  
  return (
    <>
      <Helmet>
        <meta name="description" content="Learn html, css ,js ,react" />
        <title> Register page </title>
      </Helmet>
      <div className="row mt-8">
        <div className="col-8">
          <div className="register__bg"></div>
        </div>
        <div className="col-4">
          <div className="account">
            <div className="account__section">
              <form onSubmit={handleFormSubmit}>
                <div className="group">
                  <h3 className="form-title">Sign Up</h3>
                </div>
                <div className="group">
                  <input
                    type="name"
                    name="name"
                    className="group__control"
                    placeholder="Enter name"
                    onChange={handleInput}
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    className="group__control"
                    placeholder="Enter email"
                    onChange={handleInput}
                  />
                </div>
                <div className="group">
                  <input
                    type="password"
                    name="password"
                    className="group__control"
                    placeholder="Enter password"
                    onChange={handleInput}
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="btn btn-default btn-block"
                    value={loading ? '...':'Register'}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Register;
