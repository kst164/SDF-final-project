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
<div className="namers">
<div className='container'>
<div className="namers row row-cols-1 row-cols-md-2 g-4">
  <div className="col w-50 p-3">  
  <div className="card border-primary arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calculator-fill" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z"/>
</svg>Maths</h1>
        <hr ></hr>
        <div class="list-group list-group-flush">
        <Link to="/student/subtopic" class="list-group-item "><p className="card-text">Calculus</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">3D Geometry</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Vectors</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Algebra</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Trigonometry</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Binomial Theorem</p></Link>
        </div>
      </div>
    </div>
  </div> 
  <div className="col w-50 p-3">  
  <div className="card border-danger arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
</svg>Chemistry</h1>
        <hr ></hr>
        <div class="list-group list-group-flush">
        <Link to="#" class="list-group-item "><p className="card-text">Organic Chemistry</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Inorganic Chemistry</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Chemical Kinetics</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Atomic Structure</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Gaseuous State</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Solid State</p></Link>
        </div>
      </div>
    </div>
  </div>
  <div className="col w-50 p-3">  
  <div className="card border-warning arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
</svg>Physics</h1>
        <hr ></hr>
        <div class="list-group list-group-flush">
        <Link to="#" class="list-group-item "><p className="card-text">Mechanics</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Elctrical</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Magnetism</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Optics</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Wave Optics</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Thermodynamics</p></Link>
        </div>
      </div>
    </div>
  </div>
  <div className="col w-50 p-3">  
  <div className="card border-dark arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bug-fill" viewBox="0 0 16 16">
  <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"/>
  <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
</svg>Biology</h1>
        <hr ></hr>
        <div class="list-group list-group-flush">
        <Link to="#" class="list-group-item "><p className="card-text">Digestive System</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Neural system</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Reproductive system</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Photosynthesis</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Bacteria </p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Respiratory system</p></Link>
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
        <span className='icon'><ion-icon name="newspaper-outline"></ion-icon></span>
        <span className='title'>My Courses</span>
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