import React,{useState} from 'react';
import dragon from './dragon.png'
// import './style.css';
import './Vernav.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function Navbar() {
    const [init1,setinit1]=useState("list active");
  const [init2,setinit2]=useState("list");
  const [init3,setinit3]=useState("list");
  const [init4,setinit4]=useState("list");
  const [init5,setinit5]=useState("list");
  const [init6,setinit6]=useState("list");
  const [init7,setinit7]=useState("list");
  return (
    <>
    <div className="navigation">
  <ul>
    <li className={init1}>
      <Link to="#" onClick={() => {if(init1=="list"){setinit1("list active")}else{setinit1("list");}setinit2("list");setinit3("list");setinit4("list");setinit5("list");setinit6("list");}}>
        <span className='icon'><ion-icon name="newspaper-outline"></ion-icon></span>
        <span className='title'>My Courses</span>
      </Link>
    </li>
    <li className={init2}>
      <Link to="#" onClick={() => {if(init2=="list"){setinit2("list active")}else{setinit2("list");}setinit1("list");setinit3("list");setinit4("list");setinit5("list");setinit6("list");}}>
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Item 2</span>
      </Link>
    </li>
    <li className={init3} onClick={() => {if(init3=="list"){setinit3("list active")}else{setinit3("list");}setinit1("list");setinit2("list");setinit4("list");setinit5("list");setinit6("list");}}>
      <Link to="#" >
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Item 3</span>
      </Link>
    </li>
    <li className={init4} onClick={() => {if(init4=="list"){setinit4("list active")}else{setinit4("list");}setinit1("list");setinit2("list");setinit3("list");setinit5("list");setinit6("list");}}>
      <Link to="#" >
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Item 4</span>
      </Link>
    </li>
    <li className={init5} onClick={() => {if(init5=="list"){setinit5("list active")}else{setinit5("list");}setinit1("list");setinit2("list");setinit3("list");setinit4("list");setinit6("list");}}>
      <Link to="#" >
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Item 5</span>
      </Link>
    </li>
    <li className={init6}>
      <Link to="#" onClick={() => {if(init6=="list"){setinit6("list active")}else{setinit6("list");}setinit1("list");setinit2("list");setinit3("list");setinit4("list");setinit5("list");}}>
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Item 6</span>
      </Link>
    </li>
  </ul>
</div>
<div className="toggle">

</div>
    </>
    )
}
