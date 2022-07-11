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
export default function AddLecture() {
    const [link1,setlin1]=useState("https://www.youtube.com/watch?v=waNsBwNd86g")
    return (
      <>
      <div className="container-fluid conj">
      <button type="button" className="btn koke btn-outline-success my-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop2"><div className="fs-2 "><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-calendar-plus mr-2" viewBox="-2 -2 25 25">
  <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>Add a Lecture</div></button>
      <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
    <h5 className="card-header bg-warning">Lecture 1</h5>
    <div className="card-body">
    <h5 className="card-title">Topic   :Differentiation</h5>
      <h5 className="card-title">Status: Ongoing</h5>
      <h5 className="card-title">Date:Today</h5>
      <h5 className="card-title">Time:10:00 am</h5>
      <button type="button" className="btn btn-outline-danger mt-1"><h5 className="card-title">Cancel</h5></button>
    </div>
  </div>
  <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
    <h5 className="card-header bg-primary">Lecture 6</h5>
    <div className="card-body">
      <h5 className="card-title">Topic   :Integration</h5>
      <h5 className="card-title">Status: Upcoming</h5>
      <button type="button" className="btn btn-outline-danger mt-1"><h5 className="card-title">Cancel</h5></button>
    </div>
  </div>
  <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
    <h5 className="card-header meal ">Lecture 1</h5>
    <div className="card-body">
    <h5 className="card-title">Topic   :Limits</h5>
      <h5 className="card-title">Status:Completed</h5>
      <button type="button" className="btn btn-outline-danger mt-1"><h5 className="card-title">Cancel</h5></button>
    </div>
  </div>
  
      </div>
      <div class="modal fade deaf" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center deaf" id="staticBackdropLabel">Add a lecture</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {/*matter start*/}
      <div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Subtopic Name</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" value="Calculus"/>
</div>

<div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Lecture Number</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" value="Lecture 6"/>
</div>
<div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Name of the Lecture</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='A relatable name'/>
</div>
<div class="input-group">
  <span class="input-group-text w-25"><h5 className='my-2'>Description</h5></span>
  <textarea class="form-control h-75" aria-label="With textarea" placeholder='A Brief Description'></textarea>
</div>
<div class="input-group mb-3 my-4">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Link</h5></span>
  <input type="text" class="form-control" id="basic-url" placeholder='www.youtube.com' aria-describedby="basic-addon3"/>
</div>
{/*matter end*/}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Done</button>
      </div>
    </div>
  </div>
</div>
      </>
      )
}
