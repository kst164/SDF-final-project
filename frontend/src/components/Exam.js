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
export default function Exam() {
  const [quests,setquests]=useState([]);
  const modalexam=()=>
  {

    return <div class="modal-dialog modal-dialog-scrollable modal-xl">
    <div class="modal fade" id="staticBackdrop35" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {quest()}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  }
  const quest=()=>
  {
    return (<>
    <div className="card hover-shadow border-primary">
  <h5 className="card-header">Question 1</h5>
  <div className="card-body">
  <p className="card-text">What is 1+2</p>
    <h5 className="card-title">Options:</h5>
    <div className='card-text'>
    <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlhtmlFor="flexRadioDefault1">
    3
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    4
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    5
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
  <label className="form-check-label" htmlFor="flexRadioDefault4">
   6
  </label>
</div>
    </div>
  </div>
</div>

    </>);
  }  
  return (
    <>
    <div className="container nose ">
      
     
    <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
  <h5 className="card-header bg-success">Exam 1</h5>
  <div className="card-body">
  <h5 className="card-title">Topic   :Differentiation</h5>
    <h5 className="card-title">Status:Evaluated</h5>
    <h5 className="card-title">Score:7/7</h5>
    <p className="card-text"><a href="#" target="_blank"></a></p>
  </div>
</div>
<div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
  <h5 className="card-header bg-warning">Exam 2</h5>
  <div className="card-body">
    <h5 className="card-title">Topic   :Integration</h5>
    <h5 className="card-title">Status:Pending</h5>
    <p className="card-text"><a href="#" target="_blank"></a></p>
  <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop35">Start</button>
  </div>
</div>


    </div>
    {modalexam()}
    </>
  )
}
