import React,{useState,useEffect} from 'react';
import dragon from './dragon.png'
import './style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FacultyNav from './FacultyNav';
import axios from "axios";

export default function Facultydash() {
  const [facTopics, setFacTopics] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const auth = {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      };
      const response = await axios.get("/faculty/topics", { auth });
      if (response.status == 200) {
        setFacTopics(response.data);
      }
    }
    fetch();
  }, [])

  return (
   <>
   <div className="dashsizer">
   <FacultyNav/>

<br/><br/><br/><br/>
<div className="namers">
<div className='container'>
<div className="namers row row-cols-1 row-cols-md-2 g-4">
  
  
  {facTopics.map(topic => {
        return <div className="col w-50 p-3">  
  <div className="card border-primary arrow hover-shadow p-3 mb-5 bg-body rounded">
      <div className="card-body">
      <h1 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calculator-fill" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z"/>
</svg>{topic.name}</h1>
        <hr ></hr>
        <div className="list-group list-group-flush container">
          {topic.subtopics.map(subtopic => {
            return <Link to={`/faculty/mycourses/${topic.id}/${subtopic.id}/${subtopic.name}`} className="list-group-item d-flex justify-content-between align-items-center" ><h5 className="mb-1">{subtopic.name}</h5>  <small></small></Link>
          })}
        </div>
      </div>
    </div>
  </div>
      })}
 
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