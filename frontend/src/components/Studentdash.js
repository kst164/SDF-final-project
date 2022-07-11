import React,{useState} from 'react';
import dragon from './dragon.png'
import './style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";
import StudentNavbar from './StudentNavbar';
export default function Studentdash() {
  const navigate=useNavigate();
  const openprofile=(id2)=>
  {
    navigate("/student/subtopic");
  };
  const [name,setname]=useState("Name");
  const [email,setemail]=useState("Name@gmail.com");
  const [id,setid]=useState("ab12abcd12345");
  return (
   <>
   <div className="dashsizer">
   <StudentNavbar/>

<br/><br/><br/><br/>
<div className="namers">
<div className='container'>
<div className="namers row row-cols-1 row-cols-md-2 g-4">
  <div className="col w-50 p-3">  
  <div className="card border-primary arrow hover-shadow p-3 mb-5 bg-body rounded">
      <div className="card-body">
      <h1 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calculator-fill" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z"/>
</svg>Maths</h1>
        <hr ></hr>
        <div className="list-group list-group-flush container">
        <Link to='/student/subtopic Calculus'  className="list-group-item d-flex justify-content-between align-items-center" ><h5 className="mb-1">Caclulus</h5>  <small>7/7</small></Link>
        <Link to="/student/subtopic 3DGeometry" className="list-group-item d-flex justify-content-between align-items-center" ><h5 className="mb-1">3D Geomtery</h5>  <small>6/7</small></Link>
        <Link to="/student/subtopic Vectors" className="list-group-item d-flex justify-content-between align-items-center" ><h5 className="mb-1">Vectors</h5>  <small>0/7</small></Link>
        <Link to="/student/subtopic" className="list-group-item d-flex justify-content-between align-items-center" ><h5 className="mb-1">Algebra</h5>  <small>2/7</small></Link>
        <Link to="/student/subtopic" className="list-group-item d-flex justify-content-between align-items-center" ><h5 className="mb-1">Binomial Theorem</h5>  <small>5/7</small></Link>
        <Link to="/student/subtopic" className="list-group-item d-flex justify-content-between align-items-center" ><h5 className="mb-1">Probability</h5>  <small>1/7</small></Link>
        </div>
      </div>
    </div>
  </div> 
  <div className="col w-50 p-3">  
  <div className="card border-danger arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-funnel-fill" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
</svg>Chemistry</h1>
        <hr ></hr>
        <div className="list-group list-group-flush">
        <Link to="#" className="list-group-item "><p className="card-text">Organic Chemistry</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Inorganic Chemistry</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Chemical Kinetics</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Atomic Structure</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Gaseuous State</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Solid State</p></Link>
        </div>
      </div>
    </div>
  </div>
  <div className="col w-50 p-3">  
  <div className="card border-warning arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
</svg>Physics</h1>
        <hr ></hr>
        <div className="list-group list-group-flush">
        <Link to="#" className="list-group-item "><p className="card-text">Mechanics</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Elctrical</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Magnetism</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Optics</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Wave Optics</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Thermodynamics</p></Link>
        </div>
      </div>
    </div>
  </div>
  <div className="col w-50 p-3">  
  <div className="card border-dark arrow hover-shadow p-3 mb-5 bg-body rounded">
  
      <div className="card-body">
      <h1 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bug-fill" viewBox="0 0 16 16">
  <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"/>
  <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
</svg>Biology</h1>
        <hr ></hr>
        <div className="list-group list-group-flush">
        <Link to="#" className="list-group-item "><p className="card-text">Digestive System</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Neural system</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Reproductive system</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Photosynthesis</p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Bacteria </p></Link>
        <Link to="#" className="list-group-item "><p className="card-text">Respiratory system</p></Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/*  insert jhere */}
</div>
<div className="navigation">
  <ul>
    <li className="list active">
      <Link to="#" >
        <span className='icon'><ion-icon name="newspaper-outline"></ion-icon></span>
        <span className='title'>My Courses</span>
      </Link>
    </li>
    
  </ul>
</div>
<div className="toggle">

</div>
</div>

  </>
  )
}