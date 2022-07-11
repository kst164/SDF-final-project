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
export default function AddHw() {
  const markholder=()=>
  {
    return(
    <div class="input-group my-3">
  
    <input type="text" aria-label="First name" class="form-control" value="Student id here"/>
    <input type="text" aria-label="Last name" class="form-control" placeholder='Marks here'/>
    <span class="input-group-text">/100 </span>
  </div>);
  }
  const [link1,setlin1]=useState("https://www.youtube.com/watch?v=waNsBwNd86g");
  return (
    <>
    <div className="container-fluid conj">
    <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
  <h5 className="card-header bg-success">Assignment 1</h5>
  <div className="card-body">
  <h5 className="card-title">Topic   :Differentiation</h5>
    <h5 className="card-title">Status:Evaluated</h5>
    <p className="card-text"><a href={link1} target="_blank"></a></p>
  </div>
</div>
<div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
  <h5 className="card-header bg-warning">Assignment 2</h5>
  <div className="card-body">
    <h5 className="card-title">Topic   :Integration</h5>
    <h5 className="card-title">Status:Pending</h5>
    <p className="card-text"><a href={link1} target="_blank"></a></p>
  <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop5">Evaluate</button>
  </div>
</div>


    </div>
    <div class="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Evaluate Assignment 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {/* matter ehere */}
        {markholder()}
        {markholder()}
        {markholder()}
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
