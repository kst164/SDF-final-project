import React,{useState} from 'react';
import dragon from './dragon.png'
import './style.css';
export default function Studentdash() {
  const [name1, setname1] = useState("list");
  const [name2, setname2] = useState("list");
  const [name3, setname3] = useState("list");
  const [name4, setname4] = useState("list");
  const [name5, setname5] = useState("list");
  const [name6, setname6] = useState("list");
  const activer=(num)=>
  {
    if(num==1)
    {
      setname1("list active");
      setname2("list");
      setname3("list");
      setname4("list");
      setname5("list");
      setname6("list");
    }
    else if(num==2)
    {
      setname1("list");
      setname2("list active");
      setname3("list");
      setname4("list");
      setname5("list");
      setname6("list");
    }
    else
    {

    }
  }
  return (
   <>
   <div className="dashsizer">
   <div className="container-fluid">

   <nav className="specific fixed-top navbar-dark navbar navbar-expand-lg">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <h1>Academy</h1>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto">
      
        <li className="nav-item">
          <h4><a className="nav-link active" aria-current="page" href="#">Home</a></h4>
        </li>
        <li className="nav-item dropdown">
        <h4>
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </h4>
        </li>
        </ul>
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
        <img className="poser float-end" src={dragon} height="5%" width="5%"/>
        </a>
        </li>
        <li className="nav-item dropdown">
        <h4>
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rohith
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </h4>
        </li>
        </ul>
      
      
    </div>
  </div>
</nav>
</div>
{/* insert here  */}
<br/><br/><br/><br/>

<div className="navigation">
  <ul>
    <li className={name1}>
      <a href="#" onClick={activer(1)}>
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Home</span>
      </a>
    </li>
    <li className={name2} >
      <a href="#" onClick={activer(2)}>
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Item 2</span>
      </a>
    </li>
    <li className={name3}>
      <a href="#" >
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Item 3</span>
      </a>
    </li>
    <li className={name4}>
      <a href="#" >
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Item 4</span>
      </a>
    </li>
    <li className={name5}>
      <a href="#" >
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Item 5</span>
      </a>
    </li>
    <li className={name6}>
      <a href="#" >
        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
        <span className='title'>Item 6</span>
      </a>
    </li>
  </ul>
</div>
{/* insert here  */}
</div>
   </>
  )
}
