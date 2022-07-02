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
  <button type="button" class="btn btn-outline-primary">Evaluate</button>
  </div>
</div>


    </div>
    </>
  )
}
