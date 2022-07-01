import React,{useState} from 'react';
import dragon from './dragon.png'
import './style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function Studentdash() {
  return (
   <>
   <div className="dashsizer">
   <div className="container-fluid">

   <nav className="specific fixed-top navbar-dark navbar navbar-expand-lg">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/student">
      <h1>Academy</h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto">
      
        <li className="nav-item">
          <h4><Link className="nav-link active" aria-current="page" to="#">Home</Link></h4>
        </li>
        <li className="nav-item dropdown">
        <h4>
          <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
          </h4>
        </li>
        </ul>
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="#">
        <img className="poser float-end" src={dragon} height="5%" width="5%"/>
        </Link>
        </li>
        <li className="nav-item dropdown">
        <h4>
          <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rohith
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="#">Profile</Link></li>
            <li><Link className="dropdown-item" to="/">Log out</Link></li>
          </ul>
          </h4>
        </li>
        </ul>
      
      
    </div>
  </div>
</nav>
</div>
<br/><br/><br/><br/>
{/*  insert jhere */}
<div className="navigation">
  <ul>
    <li className="list active">
      <Link to="#" >
        <span className='icon'><ion-icon name="newspaper-outline"></ion-icon></span>
        <span className='title'>My Courses</span>
      </Link>
    </li>
    
  </ul>
</div>

</div>

  </>
  )
}