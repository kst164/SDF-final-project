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
import AddMaterial from './AddMaterial';
import AddHw from './AddHw.js';
import AddExam from './AddExam.js';
import Statistics from './Statistics.js';
import AddLecture from './AddLecture.js';
import FacultyNav from './FacultyNav';
export default function Mycourse() {
  const [element,setelement]=useState(<AddLecture/>)
  const [init1,setinit1]=useState("list");
  const [init2,setinit2]=useState("list active");
  const [init3,setinit3]=useState("list");
  const [init4,setinit4]=useState("list");
  const [init5,setinit5]=useState("list");
  return (
   <>
   <div className="dashsizer">
   <FacultyNav/>
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
      <Link to="#" onClick={() => {if(init2=="list"){setinit2("list active")}setinit1("list");setinit3("list");setinit4("list");setinit5("list");setelement(<AddLecture/>)}}>
        <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-play-btn" viewBox="-2 0 25 25">
  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg></span>
        <span className='title'>Lectures</span>
      </Link>
    </li>
    <li className={init3} onClick={() => {if(init3=="list"){setinit3("list active")}setinit1("list");setinit2("list");setinit4("list");setinit5("list");setelement(<AddMaterial/>)}}>
      <Link to="#" >
        <span className='icon'><ion-icon name="documents-outline"></ion-icon></span>
        <span className='title'>Materials</span>
      </Link>
    </li>
    <li className={init4} onClick={() => {if(init4=="list"){setinit4("list active")}setinit1("list");setinit2("list");setinit3("list");setinit5("list");setelement(<AddHw/>)}}>
      <Link to="#" >
        <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-card-checklist" viewBox="-2 0 25 25">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg></span>
        <span className='title'>Assignments</span>
      </Link>
    </li>
    <li className={init5} onClick={() => {if(init5=="list"){setinit5("list active")}setinit1("list");setinit2("list");setinit3("list");setinit4("list");setelement(<AddExam/>)}}>
      <Link to="#" >
        <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-clipboard2-data" viewBox="-2 0 25 25">
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z"/>
</svg></span>
        <span className='title'>Exams</span>
      </Link>
    </li>
   
  </ul>
</div>
{element}
</div>

  </>
  )
}
