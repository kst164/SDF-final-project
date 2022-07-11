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
export default function AddMaterial() {
  return (
    <>
    <div className="perv container">
<div className="namers row row-cols-1 row-cols-md-2 g-4">
    <div className="col w-50 p-3">  
  <div className="card wideg border-primary arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title">Reference Materials</h1>
        <hr ></hr>
        <div className="list-group list-group-flush">
        <Link to="#" className="list-group-item "><p className="card-text">Class Slides</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Reference book 1</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Reference book 2</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Recorded video</p></Link>
        <div className="input-group mb-3 my-4">
  <input type="file" className="form-control" id="inputGroupFile02"/>
  <button type="button" className="btn btn-outline-primary">Upload</button>
</div>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
    </>
  )
}
