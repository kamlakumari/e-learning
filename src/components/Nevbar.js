import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {  useNavigate } from 'react-router-dom';

const Nevbar = () => {
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.clear()
        navigate("/login-form")
    }
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='/'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/course">Course</a>
        </li>
        
        <li className="nav-item float-right">
            {  localStorage.getItem("login") === "true" ?
             <a className="nav-link" onClick={logout}>Logout</a>
        :
          <a className="nav-link" href="/login-form">Login</a>
        }
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Nevbar
