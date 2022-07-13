import React,{useState, useEffect} from 'react';
import dragon from './dragon.png'
import './style.css';
import './Vernav.css';
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
export default function Lecture() {
  const params = useParams();
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const loadLecs = async () => {
      const auth = {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      }
      const lecs = await axios.get(`/topics/${params.topicid}/subtopics/${params.subtopicid}/lectures`, {auth});
      if (lecs.status == 200) {
        console.log("ok");
        setLectures(lecs.data);
      } else {
        console.log(lecs)
        console.log(lecs.status);
      }
    }
    loadLecs();
  }, []);

  const element=(idx, name, desc, link)=>
  {
      return(
        <>
        <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
  <h5 className="card-header bg-warning">Lecture {idx+1}</h5>
  <div className="card-body">
  <h5 className="card-title">Topic   : {name}</h5>
    <h5 className="card-title">Description: {desc}</h5>
   
    <p className="card-text"><a href={link1} target="_blank"></a></p>
    <div className="d-grid gap-2 col-4 mx-auto"><a href={link} target="_blank" className="btn btn-outline-success">Start</a></div>
  </div>
</div>
        </>
      )
  }
  const [link1,setlin1]=useState("https://www.youtube.com/watch?v=waNsBwNd86g")
  return (
    <>
    <div className="container-fluid conj">
    {lectures.map((lec, idx) => element(idx, lec.name, lec.description, lec.link))}

    </div>
    </>
    )
}
