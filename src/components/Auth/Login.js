import React from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux-store/actions";
const Login = () => {
  const [userCredential, setuserCredential]  = useState({email:"", password:""})
  const dispatch = useDispatch()
  const handleLoginSubmit = e => {
    e.preventDefault()
    dispatch(loginAction(userCredential))
    //console.log(userCredential);
  }
  return (
    <>
      <Helmet>
        <meta name="description" content="Learn html, css ,js ,react" />
        <title> Login page </title>
      </Helmet>
      <div className="row mt-8">
        <div className="col-8">
          <div className="register__bg"></div>
        </div>
        <div className="col-4">
          <div className="account">
            <div className="account__section">
              <form onSubmit={handleLoginSubmit}>
                <div className="group">
                  <h3 className="form-title">Sign In</h3>
                </div>
                <div className="group">
                  <input
                    onChange={e =>setuserCredential({...userCredential, [e.target.name]:e.target.value})}
                    type="email"
                    name="email"
                    value={userCredential.email}
                    className="group__control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="group">
                  <input
                    onChange={e => setuserCredential({...userCredential, [e.target.name]:e.target.value})}
                    type="password"
                    name="password"
                    value={userCredential.password}
                    className="group__control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="btn btn-default btn-block"
                    value="login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default Login;
