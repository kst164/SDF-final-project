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
  return (
    <>
    <div className="perv container">
    <div className="conj3">
        <button type="button" class="btn koke btn-outline-success my-4"><div class="fs-2 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-plus-fill" viewBox="-2 -2 25 25">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>Add a Faculty</div></button></div>
<div className="namers row row-cols-1 row-cols-md-2 g-4">
    
    <div className="col w-50 p-3">  
  <div className="card wideg border-primary arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title">Available Faculty</h1>
        <hr ></hr>
        <div class="list-group list-group-flush">
        <Link to="#" class="knock list-group-item "><p className="card-text">Einstein</p></Link>
        <Link to="#" class="knock list-group-item "><p className="card-text">Tesla</p></Link>
        <Link to="#" class="knock list-group-item "><p className="card-text">Curie</p></Link>
        <Link to="#" class="knock list-group-item "><p className="card-text">Newton</p></Link>
        <Link to="#" class="knock list-group-item "><p className="card-text">Archimedes</p></Link>
        <Link to="#" class="knock list-group-item "><p className="card-text">Galileo</p></Link>
        </div>
      </div>
    </div>
  </div>
    </div>
   
    </div>
    </>
  )
}
