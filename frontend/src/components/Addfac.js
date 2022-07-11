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
export default function Addfac() {
  const facadder=()=>
  {
    return(<>
    <div class="modal fade" id="staticBackdrop11" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add a Course</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Course Name</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
</div>

<div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Subtopic Name</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
</div>
<div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Faculty Name</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
</div>
<div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Faculty id</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal" >Add</button>
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
        <Link to="#" className="knock list-group-item "><p className="card-text">Einstein</p></Link>
        <Link to="#" className="knock list-group-item "><p className="card-text">Tesla</p></Link>
        <Link to="#" className="knock list-group-item "><p className="card-text">Curie</p></Link>
        <Link to="#" className="knock list-group-item "><p className="card-text">Newton</p></Link>
        <Link to="#" className="knock list-group-item "><p className="card-text">Archimedes</p></Link>
        <Link to="#" className="knock list-group-item "><p className="card-text">Galileo</p></Link>
        </div>
      </div>
    </div>
  </div>
    </div>
   
    </div>
    {facadder()}
    </>
  )
}
