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
import RemoveCircleOutline from "@material-ui/icons/RemoveCircleOutline";
import Edit from "@material-ui/icons/Edit";
import Plus from "@material-ui/icons/PlusOneOutlined"
import axios from "axios"; 

export default function Courseplus() {
  const [inf,setinf]=useState
  (
    [
      {
        name:"Maths",
        id:1234,
        subtopics:[
          {
            name:"3D Geomt",
            id:123,
          }
        ]
      }
    ]
  )
  const [create,setcreate]=useState(
    {
      name:"",
      subtopic:""
    }
  )
  const ok= async ()=>
  {
    const auth = {
      username: localStorage.getItem("username"),
      password: localStorage.getItem("password"),
    }
    const resp = await axios.post("/topics", { name: create.name}, {auth});
    await axios.post(`/topics/${resp.data.id}/subtopics`, { name: create.subtopic}, { 
      
    });
  }
  useEffect(() => {
    const fetch = async () => {
      console.log(localStorage.getItem("username"));
      console.log(localStorage.getItem("password"));
      const response = await axios.get("/topics", {
        auth: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        }
      });
      console.log("re")
      console.log(response.status);
      if (response.status == 200) {
        console.log(response.data);
        setinf(response.data);
      }
    }
    fetch();
  }, [])
  const adder=()=>
  {
    return (
      <>
      <div class="modal fade" id="staticBackdrop10" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add a Course</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Course Name</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" value={create.name} onChange={(e)=>{setcreate({...create,name:e.target.value})}} />
</div>

<div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Subtopic </h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" value={create.subtopic} onChange={(e)=>{setcreate({...create,subtopic:e.target.value})}}/>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal" onClick={ok} >Add</button>
      </div>
    </div>
  </div>
</div>
      </>
    );
  }
  const crud=()=>
  {
    return(<>
    <div class="modal fade" id="staticBackdrop12" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add a Subtopic</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      

<div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Name of new subtopic</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal" >Understood</button>
      </div>
    </div>
  </div>
</div>
    </>
    );
  }
  const dat=()=>
  {
    return(
      <>
{inf.map(topic => {
        return <div className="col w-50 p-3">  
  <div className="card border-primary arrow hover-shadow p-3 mb-5 bg-body rounded">
      <div className="card-body">
      <h1 className="card-title d-flex justify-content-between align-items-center"><div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calculator-fill" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z"/>
</svg>{topic.name}</div><small>
<Link to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop12"><RemoveCircleOutline style={{fontSize:"1.4em",color:"black"}}/></Link>
  <Link to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop12"><Plus style={{fontSize:"1.4em",color:"black"}}/></Link>
  </small></h1>
        <hr ></hr>
        <div className="list-group list-group-flush container">
          {topic.subtopics.map(subtopic => {
            return <Link to={`/student/subtopic ${subtopic.name}`} className="list-group-item d-flex justify-content-between align-items-center" ><h5 className="mb-1">{subtopic.name}</h5> <small><RemoveCircleOutline /></small></Link>
          })}
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
        <div className="namers">
        <div className="conj2">
        <button type="button" className="btn koke btn-outline-success my-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop10"><div className="fs-2"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus-circle" viewBox="-2 -2 25 25">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>Add a Course</div></button></div>
<div className='container'>
<div className="namers row row-cols-1 row-cols-md-2 g-4">
  {dat()}
  
  
</div>
</div>
{/*  insert jhere */}

{/*  insert jhere */}
</div>
{adder()}
{crud()}
    </>
  )
}
