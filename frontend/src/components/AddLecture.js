import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import dragon from './dragon.png'
import './style.css';
import './Vernav.css';
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function AddLecture() {
    const [link1,setlin1]=useState("https://www.youtube.com/watch?v=waNsBwNd86g")
    const [det,setdet]=useState(
      {
        name:"",
        description:"",
        link:""
      }
    )
    const [lectures,setLectures]=useState([])
    const params = useParams();
    const [reload, setReload] = useState(true);

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

    const postLec = async () => {
      const response = await axios.post(`/topics/${params.topicid}/subtopics/${params.subtopicid}/lectures`, det, {
        auth: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        }
      });
      if (response.status == 201) {
        setReload(true);
      } else {
        console.log(response);
      }
    }

    const deleteLec = async (idx) => {
      const response = await axios.delete(`/topics/${params.topicid}/subtopics/${params.subtopicid}/lectures/${idx}`, det, {
        auth: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        }
      });
      if (response.status == 204) {
        setReload(true);
      } else {
        console.log(response);
      }
    }

    const adder=()=>
    {
      return (
        <>
          <div className="modal fade deaf" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-center deaf" id="staticBackdropLabel">Add a lecture</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/*matter start*/}
<div className="input-group mb-3 ">
  <span className="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Name of the Lecture</h5></span>
  <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='A relatable name' value={det.name} onChange={(e)=>{setdet({...det,name:e.target.value})}}/>
</div>
<div className="input-group">
  <span className="input-group-text w-25"><h5 className='my-2'>Description</h5></span>
  <textarea className="form-control h-75" aria-label="With textarea" placeholder='A Brief Description' value={det.description} onChange={(e)=>{setdet({...det,description:e.target.value})}}></textarea>
</div>
<div className="input-group mb-3 my-4">
  <span className="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Link</h5></span>
  <input type="text" className="form-control" id="basic-url" placeholder='www.youtube.com' aria-describedby="basic-addon3" value={det.link} onChange={(e)=>{setdet({...det,link:e.target.value})}}/>
</div>
{/*matter end*/}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={postLec}>Done</button>
      </div>
    </div>
  </div>
</div>
        </>
      )
    }
    const eachcard=(idx, name, desc, link)=>
    {
    return <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
    <h5 className="card-header bg-warning">Lecture {idx+1}</h5>
    <div className="card-body">
    <h5 className="card-title">Topic   :{name}</h5>
      <h5 className="card-title">Description: {desc}</h5>
      <h5 className="card-title"><Link to={link} target="_blank">Link</Link></h5>
      <button type="button" className="btn btn-outline-danger mt-1"><h5 className="card-title" onClick={() => deleteLec(idx)}>Cancel</h5></button>
    </div>
  </div>
    }

    return (
      <>
      <div className="container-fluid conj">
      <button type="button" className="btn koke btn-outline-success my-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop2"><div className="fs-2 "><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-calendar-plus mr-2" viewBox="-2 -2 25 25">
  <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>Add a Lecture</div></button>
    {lectures.map((lec, idx) => eachcard(idx, lec.name, lec.description, lec.link))}
  
      </div>
      {adder()}
      </>
      )
}
