import React,{useState} from 'react';
import dragon from './dragon.png'
import './style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Facultydash() {
  return (
   <>
   <div className="dashsizer">
   <div className="container-fluid">

   <nav className="specific fixed-top navbar-dark navbar navbar-expand-lg">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/faculty">
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
            Faculty
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
<div className="namers">
<div className='container'>
<div className="namers row row-cols-1 row-cols-md-2 g-4">
  
    <div className="col w-50 p-3">  
  <div className="card wideg border-dark arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>Registered Courses</h1>
        <hr ></hr>
        <div class="list-group list-group-flush">
        <Link to="/faculty/mycourses" class="list-group-item "><p className="card-text">Organic Chemistry</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Inorganic Chemistry</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Chemical Kinetics</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Atomic Structure</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Gaseuous State</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Solid State</p></Link>
        </div>
      </div>
  </div>
    </div>
</div>
</div>
{/*  insert jhere */}
</div>
<div className="navigation">
  <ul>
    <li className="list active">
      <Link to="#" >
        <span className='icon'><ion-icon name="grid-outline"></ion-icon></span>
        <span className='title'>Dashboard</span>
      </Link>
    </li>
    
  </ul>
</div>
<div className="toggle">

</div>
</div>

  </>
  )
}