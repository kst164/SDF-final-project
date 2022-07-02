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
export default function Store() {
  return (
    <>
    <div className="perv container">
<div className="namers row row-cols-1 row-cols-md-2 g-4">
    <div className="col w-50 p-3">  
  <div className="card wideg border-primary arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title">Reference Materials</h1>
        <hr ></hr>
        <div class="list-group list-group-flush">
        <Link to="#" class="list-group-item "><p className="card-text">Organic Chemistry</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Inorganic Chemistry</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Chemical Kinetics</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Atomic Structure</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Gaseuous State</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Solid State</p></Link>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div className="namers row row-cols-1 row-cols-md-2 g-4">
    <div className="col w-50 p-3">  
  <div className="card wideg border-dark arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title">Recorded</h1>
        <hr ></hr>
        <div class="list-group list-group-flush">
        <Link to="#" class="list-group-item "><p className="card-text">Organic Chemistry</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Inorganic Chemistry</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Chemical Kinetics</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Atomic Structure</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Gaseuous State</p></Link>
        <Link to="#" class="list-group-item "><p className="card-text">Solid State</p></Link>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
    </>
  )
}
