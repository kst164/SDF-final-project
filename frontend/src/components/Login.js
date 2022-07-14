import React,{useState} from 'react'
import first from './first.jpg'
import second from './second.jpg'
import profile from './profile.png'
import def from './def.jpg'
import sp from './student.svg'
import fp from './faculty.jpg'
import ap from './admin.jpg'
import {  Link as Link1,animateScroll as scroll } from "react-scroll";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import axios from "axios";
import config from "../config";

axios.defaults.baseURL = "http://192.168.0.211:5000"
axios.defaults.validateStatus = (_status) => true;

export default function Login() {
  const navigate = useNavigate();
  const [look, setlook] = useState("role");
  const [details,setdetails]=useState(
    {
      username:"admin@iith.ac.in",
      password:"123",
    }
  );
  const [newuser,setnewuser]=useState(
    {
      username:"",
      email:"",
      password:"",
    }
  );
  const [set,setset]=useState("/faculty");
  const [updater,setupdater]=useState(def)
  const loki=()=>
  {
    if(look=="student")
    {
      return (sp);
    }
    else if(look=="faculty")
    {
      return (fp);
    }
    else if(look=="admin")
    {
      return (ap);
    }
    else
    {
      return (def);
    }
  }
  const na= async ()=>
  {
    const response = await axios.post("/signup", {
      name: newuser.username,
      email: newuser.email,
      password: newuser.password,
    });
    if (response.statusCode == 201) {
      alert("User created. You can sign in now");
    }
  }
  const req= async ()=>
  {
    console.log("called");
    const response = await axios.head("/signin" + "/"+look, {
      auth: {
        username: details.username,
        password: details.password,
      }
    });
    console.log(response.status);
    if (response.status < 300) {
      localStorage.setItem("username", details.username);
      console.log(localStorage.getItem("username"));
      localStorage.setItem("password", details.password);
      console.log("request done");
      console.log(response.status);
      navigate("/" + look);
      axios.defaults.auth = {
        username: details.username,
        password: details.password,
      }
    }
    // console.log(look);
  }
  const coc=()=>
  {
    if(look=="student")
    {
      return ("/student");
    }
    else if(look=="faculty")
    {
      return ("/faculty")
    }
    else if(look=="admin")
    {
      return ("/admin")
    }
    else
    {
      return ("#");
    }
  }
  const sign=()=>
  {
    return(
      <>
        <div className="modal fade deaf" id="staticBackdrop20" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-center deaf" id="staticBackdropLabel">Sign-Up</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/*matter start*/}
      <div className="input-group mb-3 ">
  <span className="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Username</h5></span>
  <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"  placeholder='UserName' value={newuser.username} onChange={(e)=>{setnewuser({...newuser,username:e.target.value})}}/>
</div>

<div className="input-group mb-3 ">
  <span className="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Email-ID</h5></span>
  <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='Email-ID' value={newuser.email} onChange={(e)=>{setnewuser({...newuser,email:e.target.value})}}/>
</div>
<div className="input-group mb-3 ">
  <span className="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Password</h5></span>
  <input type="password" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='Password' value={newuser.password} onChange={(e)=>{setnewuser({...newuser,password:e.target.value})}}/>
</div>

{/*matter end*/}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={na}>Done</button>
      </div>
    </div>
  </div>
</div>
      </>
    )
  }
  return (
    <>
    <div className="container-fluid">
    <nav className="nav">
        <div className="container">
            <div className="logan logo">
                <Link1 to="top">Academy</Link1>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><Link1 activeclassname="active" spy={true} smooth={true} duration={100}  offset={-70} to="section-one-wrapper" className="point">Login</Link1></li>
                    <li><Link1 activeclassname="active" spy={true} smooth={true} duration={100}  offset={-70} to="section-two-wrapper" className="point">Intro</Link1></li>
                    <li><Link1 activeclassname="active" spy={true} smooth={true} duration={100}  offset={-70} to="section-three-wrapper" className="point">About</Link1></li>
                    <li><Link1 activeclassname="active" spy={true} smooth={true} duration={100}  offset={-70} to="section-four-wrapper" className="point">Feedback</Link1></li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    <div id='top'>
    <section className="home">
    </section></div>
    </div>
     {/* login page  */}
    <div id="section-one-wrapper">
   
    <br/><br/>
    <div className="liner">
      <div className="container-fluid">
    <h2><span>Login</span></h2></div></div>
    <section className="sec1 vh-100" id="section1"  >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={loki()}
          className="img-fluid hooh "  />
      </div>
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="d2 card shadow-2-strong " >
          <div className="ex3 card-body p-5 text-center bgbro">

            <h3 className="mb-5">Sign in</h3>

            
            <div className="form-floating mb-3 ">
  <input type="email" className="carrot form-control" id="floatingInput" placeholder="name@example.com" value={details.username} onChange={(e)=>{setdetails({...details,username:e.target.value})}}/>
  <label htmlFor="floatingInput">Email address</label>
</div>
            
            <div className="form-floating">
  <input type="password" className="carrot form-control" id="floatingPassword" placeholder="Password" value={details.password} onChange={(e)=>{setdetails({...details,password:e.target.value})}}/>
  <label htmlFor="floatingPassword">Password</label>
</div>

            <div className="form-check d-flex justify-content-start mb-4">
            </div>
            <div >
            <select onChange={async (e)=>{setlook(e.target.value)}}  className="form-select my-4 ferb" aria-label="Default select example">
  <option defaultValue="role">Role</option>
  <option value="admin" >Admin</option>
  <option value="faculty">Faculty</option>
  <option value="student">Student</option>
  
</select>
            </div>
            
            <Link email={details.username} password={details.password} to={{pathname: coc(), state: {details}}} >
            </Link>
            <button className="hell btn  btn-lg btn-primary  btn-block" type="submit" onClick={req}>Login</button>
            <hr className="my-4"/>
            <Link to="#">
            <button className="btn btn-lg btn-block btn-primary gooo" 
              type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop20"> Sign-up</button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
{/* login page  */}
{/* Introduction begin */}
<div className="container-fluid">
<div id="section-two-wrapper">
<div className="liner">
      <div className="container-fluid">
    <h2><span>Intro</span></h2></div></div>
    
  
  <div className="sampu">
  <div className="how-section1">  
  {/* <div className="row">
      <div className="col-md-6">
          <h4>Assignment Evaluation</h4>
                      <h4 className="subheading">Evaluate your assignments</h4>
                      <p className="text-muted">Students can submit their work done and get 
                      evaluated by concerned faculty and also can unsubmit their work.</p>
      </div>
      <div className="col-md-6 how-img">
          <img src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png" className="rounded-circle img-fluid" alt=""/>
      </div>
  </div>
  <div className="row">
      <div className="col-md-6 how-img">
            <img src="https://image.ibb.co/ctSLu9/Work_Section2_freelance_img3.png" className="rounded-circle img-fluid" alt=""/>
      </div>
      <div className="col-md-6">
          <h4>Exams</h4>
                      <h4 className="subheading"> Write your exams and get your result immediately</h4>
                      <p className="text-muted">Write exams on the website created by concerned faculty. Complete Within the time limit.
                          Get marks immediately. Access redcorded classes,reference books,special materials and class presentations. Many features can be accessed on website on the go.</p>
      </div>
  </div> */}
  </div>
  </div>
  </div>
  </div>
  {/* Introduction end */}
  {/* about us */}
  <div id="section-three-wrapper">
  <div className="container-fluid">
  <div className="liner2">
  <h2><span>About us</span></h2></div>
  </div>
  <br/><br/><br/><br/><br/><br/>
  <div className="container">
  <div className='cardop'>
  <div className="imgcss">
    <img src={profile}/>
  </div>
  <div className="contentop ">
    <div className="details">
      <h2><br/><br/><br/>Admin<br/><span></span></h2>
      <div className='data'>
        <h3>Admin at<span>IITH</span></h3>
      </div>
    </div>
  </div>
  </div>
  {/* insert here */}
  <div className='cardop2 '>
  <div className="imgcss">
    <img src={profile}/>
  </div>
  <div className="contentop2">
    <div className="details2">
      <h2><br/><br/><br/>Admin<br/><span></span></h2>
      <div className='data2'>
        <h3>Admin at<span>IITH</span></h3>
      </div>
    </div>
  </div>
  </div>
  {/* insert here */}
  <div className='cardop3 '>
  <div className="imgcss">
    <img src={profile}/>
  </div>
  <div className="contentop3">
    <div className="details3">
      <h2><br/><br/><br/>Admin<br/><span></span></h2>
      <div className='data3'>
        <h3>Admin at<span>IITH</span></h3>
      </div>
    </div>
  </div>
  </div>
   {/* insert here */}
  </div>
  </div>
  {/* about us */}
  {/* feedback begin */}
  <div id="section-four-wrapper">
    <div className="container-fluid pos">
      <div className="apple  liner3">
      <h2><span>Feedback</span></h2>
      <br/>
      </div>
      <div className="input-group">
  <span className="sizer input-group-text">Suggestion Box</span>
  <textarea  rows="10"  className="soze form-control h-25" aria-label="With textarea" placeholder='Your Suggestions here'></textarea>
</div>\

<div className="d-grid gap-2 col-6 mx-auto text-center my-4">
<button type="submit" className="btn btn-outline-primary">Submit</button>
</div>
</div>
  </div>
  {sign()}
   {/* feedback begin */}
    </>
  )
}
