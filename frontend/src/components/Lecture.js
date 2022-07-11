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
export default function Lecture() {
  const [link1,setlin1]=useState("https://www.youtube.com/watch?v=waNsBwNd86g")
  return (
    <>
    <div className="container-fluid conj">
    <div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
  <h5 className="card-header bg-warning">Lecture 1</h5>
  <div className="card-body">
  <h5 className="card-title">Topic   :Differentiation</h5>
    <h5 className="card-title">Status: Ongoing</h5>
    <h5 className="card-title">Date:Today</h5>
    <h5 className="card-title">Time:10:00 am</h5>
    <p className="card-text"><a href={link1} target="_blank"></a></p>
    <div className="d-grid gap-2 col-4 mx-auto"><a href={link1} target="_blank" className="btn btn-outline-success">Start</a></div>
  </div>
</div>
<div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
  <h5 className="card-header bg-primary">Lecture 2</h5>
  <div className="card-body">
    <h5 className="card-title">Topic   :Integration</h5>
    <h5 className="card-title">Status: Upcoming</h5>
    <p className="card-text"><a href={link1} target="_blank"></a></p>
    <div className="d-grid gap-2 col-4 mx-auto"><a href={link1} target="_blank" className="btn btn-outline-success">Start</a></div>
  </div>
</div>
<div className="col w-75 p-3 lister card border-primary hover-shadow p-3 mb-5">
  <h5 className="card-header meal ">Lecture 3</h5>
  <div className="card-body">
  <h5 className="card-title">Topic   :Limits</h5>
    <h5 className="card-title">Status:Completed</h5>
    <p className="card-text"><a href={link1} target="_blank"></a></p>
    <div className="d-grid gap-2 col-4 mx-auto"><a href={link1} target="_blank" className="btn btn-outline-success">Start</a></div>
  </div>
</div>

    </div>
    </>
    )
}
