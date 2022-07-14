import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import dragon from './dragon.png'
import './style.css';
import './Vernav.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";

export default function Store() {
  const [avail,setavail]=useState([]);
  const params = useParams();

  useEffect(() => {
    const loadMaterials = async () => {
      const auth = {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      }
      const lecmats = await axios.get(`/topics/${params.topicid}/subtopics/${params.subtopicid}/materials`, {auth});
      if (lecmats.status == 200) {
        console.log("ok");
        setavail(lecmats.data);
      } else {
        console.log(lecmats)
        console.log(lecmats.status);
      }
    }
    loadMaterials();
  }, []);

  const element=()=>
  {
    return (
      <>
      {avail.map((lec, idx)=>{
      return <div className="namers row row-cols-1 row-cols-md-2 g-4">
    <div className="col w-50 p-3">  
  <div className="card wideg border-primary arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title">Lecture {idx+1}</h1>
        <hr ></hr>
        <div className="list-group list-group-flush">
          {lec.materials.map(mat => {
            return <a href={mat.link} className="list-group-item " target="_blank"><p className="card-text">{mat.name}</p></a>
          })}
        </div>
      </div>
    </div>
  </div>
    </div>
      })}
      </>
    )
  }
  return (
    <>
    <div className="perv container">
    {element()}
   
    </div>
    </>
  )
}
