import React,{useState} from 'react';
import dragon from './dragon.png'
import './style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function FacultyNav() {
    const [name,setname]=useState("Faculty");
  const [email,setemail]=useState("Name@gmail.com");
  const [id,setid]=useState("ab12abcd12345");
  return (
    <>
<div className="container-fluid">

<nav className="specific fixed-top navbar-dark navbar navbar-expand-lg">
<div className="container-fluid">
<Link className="navbar-brand" to="/student">
   <h1>Academy</h1>
 </Link>
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarNavDropdown">
   <ul className="navbar-nav me-auto">
   
     <li className="nav-item">
       <h4><Link className="nav-link active" aria-current="page" to="/Faculty">Home</Link></h4>
     </li>
     <li className="nav-item dropdown">
     <h4>
       <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Courses
       </Link>
       <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <li><Link className="dropdown-item" to="#">Maths</Link></li>
         <li><Link className="dropdown-item" to="#">Chemistry</Link></li>
         <li><Link className="dropdown-item" to="#">Physics</Link></li>
         <li><Link className="dropdown-item" to="#">Biology</Link></li>
         <li><Link className="dropdown-item" to="#">Social</Link></li>
       </ul>
       </h4>
     </li>
     </ul>
     <ul className="navbar-nav ms-auto">
     <li className="nav-item">
     <Link className="nav-link active" aria-current="page" to="#">
     <img className="poser float-end" src={dragon} height="5%" width="5%"/>
     </Link>
     </li>
     <li className="nav-item dropdown">
     <h4>
       <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         {name}
       </Link>
       <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <li><Link className="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop" to="#">Profile</Link>
         </li>
         <li><Link className="dropdown-item" to="/">Log out</Link></li>
       </ul>
       </h4>
     </li>
     </ul>
   
   
 </div>
</div>
</nav>
</div>
<div className="modal fade wake" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Your Profile</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {/* insert here */}
      <div className="container">
<div className="row flex-lg-nowrap">
  <div className="col">
    <div className="row">
      <div className="col mb-3">
        <div className="card">
          <div className="card-body">
            <div className="e-profile">
              <div className="row">
                <div className="col-12 col-sm-auto mb-3">
                  <div className="mx-auto" style={{width: "140px"}}>
                    <div className="d-flex justify-content-center align-items-center rounded" style={{height: "140px"}}>
                      
                      <span style={{color: "rgb(166, 168, 170)", font: "bold 8pt Arial"}}><img src={dragon} className="diet"></img></span>
                    </div>
                  </div>
                </div>
                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                  <div className="text-center text-sm-left mb-2 mb-sm-0 cola">
                    <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{name}</h4>
                    <p className="mb-0">{email}</p>
                  </div>
                </div>
              </div>
              <div className="tab-content pt-3">
                <div className="tab-pane active">
                  <form className="form" noValidate="">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Name</label>
                              <input className="form-control" type="text" name="name" placeholder="Name here" value={name} onChange={(e) => setname(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Email</label>
                              <input className="form-control" type="text" placeholder="user@example.com" value={email} onChange={(e) => setemail(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Student id</label>
                              <input className="form-control" type="text" placeholder="ab12cdef12345" value={id}/>
                            </div>
                          </div>
                        </div>
                    </div>
                    </div>
                    
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      {/* insert here */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Discard</button>
        <button type="button submit" data-bs-dismiss="modal" className="btn btn-primary"  >Save Changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
