import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate, Navigate } from "react-router-dom";

const LoginForm = () => {
  let navigate = useNavigate();
    useEffect(() => {
    let isLogin = localStorage.getItem("login");
    if (isLogin == "true") {
      navigate("/");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "admin@gmail.com" && password == "12345") {
      alert("succesully login");
      localStorage.setItem("login", true);
      navigate("/course");
    } else {
      alert("wrong credentails");
    }
    // Add your login logic here
  };

  return (
    <div className="my_form"> 
        <div className="row">
                  <div className="col-md-6 ">
                    <div className="leftside">
                      <div>
                        <pre>
                          <h4>Sample credentials</h4>
                          <h4>Username : admin@gmail.com</h4>
                          <h4>Password : 12345</h4>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="rightside">

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            />
        </div>

        <button className="btn btn-primary mt-2 w-100 " type="submit">
          Login
        </button>
      </form>
            </div>
            </div>
            </div>
    </div>
  );
};

export default LoginForm;
