import React,{useState} from 'react';
import dragon from './dragon.png'
import './style.css';
import './Vernav.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Lecture from './Lecture';
import Store from './Store';
import Hw from './Hw.js';
import Exam from './Exam.js';
import Statistics from './Statistics.js';
export default function Studentdash(props) {
  const [element,setelement]=useState(<Lecture/>)
  const [init1,setinit1]=useState("list");
  const [init2,setinit2]=useState("list active");
  const [init3,setinit3]=useState("list");
  const [init4,setinit4]=useState("list");
  const [init5,setinit5]=useState("list");
  const [init6,setinit6]=useState("list");
  const [init7,setinit7]=useState("list");
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
    <div className="poster my-3">
    <li className="list static">
      <Link to="#" >
        <span className='maintitle'>Calculus</span>
      </Link>
    </li>
    </div>
    <li className={init2}>
      <Link to="#" onClick={() => {if(init2=="list"){setinit2("list active")}setinit1("list");setinit3("list");setinit4("list");setinit5("list");setinit6("list");setelement(<Lecture/>)}}>
        <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-play-btn" viewBox="-2 0 25 25">
  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg></span>
        <span className='title'>Lectures</span>
      </Link>
    </li>
    <li className={init3} onClick={() => {if(init3=="list"){setinit3("list active")}setinit1("list");setinit2("list");setinit4("list");setinit5("list");setinit6("list");setelement(<Store/>)}}>
      <Link to="#" >
        <span className='icon'><ion-icon name="documents-outline"></ion-icon></span>
        <span className='title'>Materials</span>
      </Link>
    </li>
    <li className={init4} onClick={() => {if(init4=="list"){setinit4("list active")}setinit1("list");setinit2("list");setinit3("list");setinit5("list");setinit6("list");setelement(<Hw/>)}}>
      <Link to="#" >
        <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-card-checklist" viewBox="-2 0 25 25">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg></span>
        <span className='title'>Assignments</span>
      </Link>
    </li>
    <li className={init5} onClick={() => {if(init5=="list"){setinit5("list active")}setinit1("list");setinit2("list");setinit3("list");setinit4("list");setinit6("list");setelement(<Exam/>)}}>
      <Link to="#" >
        <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-clipboard2-data" viewBox="-2 0 25 25">
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z"/>
</svg></span>
        <span className='title'>Exams</span>
      </Link>
    </li>
    <li className={init6}>
      <Link to="#" onClick={() => {if(init6=="list"){setinit6("list active")}setinit1("list");setinit2("list");setinit3("list");setinit4("list");setinit5("list");setelement(<Statistics/>)}}>
        <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-graph-up" viewBox="-2 0 25 25">
  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
</svg></span>
        <span className='title'>Progress</span>
      </Link>
    </li>
  </ul>
</div>
{element}
</div>

  </>
  )
}