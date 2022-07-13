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
  Link
} from "react-router-dom";
export default function Login() {
  const [look, setlook] = useState("role");
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
    <div class="col-md-9 col-lg-6 col-xl-5">
        <img src={loki()}
          class="img-fluid hooh "  />
      </div>
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="d2 card shadow-2-strong " >
          <div className="ex3 card-body p-5 text-center bgbro">

            <h3 className="mb-5">Sign in</h3>

            
            <div className="form-floating mb-3 ">
  <input type="email" className="carrot form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
            
            <div className="form-floating">
  <input type="password" className="carrot form-control" id="floatingPassword" placeholder="Password"/>
  <label htmlFor="floatingPassword">Password</label>
</div>

            <div className="form-check d-flex justify-content-start mb-4">
            </div>
            <div >
            <select onChange={async (e)=>{setlook(e.target.value)}}  class="form-select my-4 ferb" aria-label="Default select example">
  <option selected value="role">Role</option>
  <option value="admin" >Admin</option>
  <option value="faculty">Faculty</option>
  <option value="student">Student</option>
  
</select>
            </div>
            
            <Link  to={coc()} >
            <button className="hell btn  btn-lg btn-primary  btn-block" type="submit">Login</button>
            </Link>
            <hr className="my-4"/>
            <Link to="#">
            <button className="btn btn-lg btn-block btn-primary gooo" 
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
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
  <div className="row">
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
  </div>
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
   {/* feedback begin */}
    </>
  )
}
