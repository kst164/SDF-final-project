import React,{useState, useEffect} from 'react';
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
import axios from "axios";

export default function Addfac() {
  const [add,setadd]=useState("")
  const [avail,setavail]=useState([]);
  const [facid,setfacid]=useState(-1);
  const [topicToAdd, setTopicToAdd] = useState("");
  const [currenttopic,setcurrenttopic]=useState([
    
  ]);
  const [alltopics,setalltopics]=useState([
    
  ]);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("/faculty", {
        auth: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        }
      });
      if (response.status == 200) {
        setavail(response.data);
      }
    }
    fetch();
  }, [])

  const loadFacData = async () => {
    const auth = {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    }
    const topics = await axios.get("/topics", {auth});
    setalltopics(topics.data);
    const factopics = await axios.get(`/faculty/${facid}/topics`, {auth});
    setcurrenttopic(factopics.data);
  }
  useEffect(() => {
    console.log(facid);
    if (facid < 0) {
      return;
    }
    loadFacData();
  }, [facid]);

  const postid= async ()=>
  {
    const auth = {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    }
    const resp = await axios.post("/faculty", { email: add }, {auth});
  }
  const addfactopic= async ()=>
  {
    const auth = {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    }
    const resp = await axios.post(`/faculty/${facid}/topics`, { topicId: topicToAdd }, {auth});
  }
  const facmanager=()=>
  {
    return (
      <>
      <div class="modal fade" id="staticBackdrop25" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add a Course</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Enrolled Topics </h5></span>
  <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  {currenttopic.map(topic => {
        return <option value={topic.id}>{topic.name}</option>
  })}
</select></div>

<div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Available Topics </h5></span>
  <select class="form-select" aria-label="Default select example" onChange={async (e)=>{setTopicToAdd(e.target.value)}}>
  <option value="" selected>Open this select menu</option>
  {alltopics.map(topic => {
        return <option value={topic.id}>{topic.name}</option>
  })}
 
</select></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal" onClick={addfactopic} >Add</button>
      </div>
    </div>
  </div>
</div>
      </>
    );
  }
  const facadder=()=>
  {
    return(<>
    <div class="modal fade" id="staticBackdrop11" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add a Faculty</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Email-ID</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" value={add} onChange={(e)=>{setadd(e.target.value)}}/>
</div>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal" onClick={postid} >Add</button>
      </div>
    </div>
  </div>
</div>
    </>);
  }
  return (
    <>
    <div className="perv container">
    <div className="conj3">
        <button type="button" className="btn koke btn-outline-success my-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop11"><div className="fs-2"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-plus-fill" viewBox="-2 -2 25 25">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>Add a Faculty</div></button></div>
<div className="namers row row-cols-1 row-cols-md-2 g-4">
    
    <div className="col w-50 p-3">  
  <div className="card wideg border-primary arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title">Available Faculty</h1>
        <hr ></hr>
        <div className="list-group list-group-flush">
        {avail.map(fac => {
          return <Link to="#" className="knock list-group-item "  data-bs-toggle="modal" data-bs-target="#staticBackdrop25" onClick={()=>{setfacid(fac.id);}}><p className="card-text">{fac.name}</p></Link>
          })}
        </div>
      </div>
    </div>
  </div>
    </div>
   
    </div>
    {facadder()}
    {facmanager()}
    </>
  )
}
