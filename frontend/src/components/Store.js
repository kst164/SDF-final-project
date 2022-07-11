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
      <h1 className="card-title">Lecture 1</h1>
        <hr ></hr>
        <div className="list-group list-group-flush">
        <a href="https://drive.google.com/drive/u/1/folders/1hrvIBfNqbRdDR_8DTMVWAoV8kuBAiYRm" className="list-group-item " target="_blank"><p className="card-text">Class Notes</p></a>
        <a href="https://www.youtube.com/watch?v=24UAWtIEGIg" className="list-group-item " target="_blank"><p className="card-text">Lecture Video</p></a>
        <a href='https://drive.google.com/drive/u/1/folders/1hrvIBfNqbRdDR_8DTMVWAoV8kuBAiYRm' className="list-group-item " target="_blank"><p className="card-text">Reference Books</p></a>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div className="namers row row-cols-1 row-cols-md-2 g-4">
    <div className="col w-50 p-3">  
  <div className="card wideg border-dark arrow hover-shadow p-3 mb-5 bg-body rounded">
  
  <div className="card-body">
      <h1 className="card-title">Lecture 2</h1>
        <hr ></hr>
        <div className="list-group list-group-flush">
        <a href="https://drive.google.com/drive/u/1/folders/1hrvIBfNqbRdDR_8DTMVWAoV8kuBAiYRm" className="list-group-item " target="_blank"><p className="card-text">Class Notes</p></a>
        <a href="https://www.youtube.com/watch?v=24UAWtIEGIg" className="list-group-item " target="_blank"><p className="card-text">Lecture Video</p></a>
        <a href='https://drive.google.com/drive/u/1/folders/1hrvIBfNqbRdDR_8DTMVWAoV8kuBAiYRm' className="list-group-item " target="_blank"><p className="card-text">Reference Books</p></a>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
    </>
  )
}
