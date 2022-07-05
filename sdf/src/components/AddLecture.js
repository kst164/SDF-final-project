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
      <button type="button" class="btn koke btn-outline-success my-4"><div class="fs-2 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-calendar-plus mr-2" viewBox="-2 -2 25 25">
  <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>Schedule a lecture</div></button>
      <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
    <h5 className="card-header bg-warning">Lecture 1</h5>
    <div className="card-body">
    <h5 className="card-title">Topic   :Differentiation</h5>
      <h5 className="card-title">Status: Ongoing</h5>
      <h5 className="card-title">Date:Today</h5>
      <h5 className="card-title">Time:10:00 am</h5>
      <button type="button" class="btn btn-outline-danger mt-1"><h5 className="card-title">Cancel</h5></button>
    </div>
  </div>
  <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
    <h5 className="card-header bg-primary">Lecture 6</h5>
    <div className="card-body">
      <h5 className="card-title">Topic   :Integration</h5>
      <h5 className="card-title">Status: Upcoming</h5>
      <button type="button" class="btn btn-outline-danger mt-1"><h5 className="card-title">Cancel</h5></button>
    </div>
  </div>
  <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
    <h5 className="card-header meal ">Lecture 1</h5>
    <div className="card-body">
    <h5 className="card-title">Topic   :Limits</h5>
      <h5 className="card-title">Status:Completed</h5>
      <button type="button" class="btn btn-outline-danger mt-1"><h5 className="card-title">Cancel</h5></button>
    </div>
  </div>
  
      </div>
      </>
      )
}
