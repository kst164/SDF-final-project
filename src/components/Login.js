import React from 'react'
import first from './first.jpg'
import second from './second.jpg'
import profile from './profile.png'
import {  Link as Link1,animateScroll as scroll } from "react-scroll";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function Login() {
  

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

            <button className="hell btn  btn-lg btn-primary  btn-block" type="submit">Login</button>

            <hr className="my-4"/>

            <button className="btn btn-lg btn-block btn-primary gooo" 
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            

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
          <h4>Get hired quickly</h4>
                      <h4 className="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4>
                      <p className="text-muted">Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
                          Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
                          Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.</p>
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
          <h4>Work efficiently, effectively.</h4>
                      <h4 className="subheading">With GetLance, you have the freedom and flexibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to:</h4>
                      <p className="text-muted">Send and receive files. Deliver digital assets in a secure environment.
                          Share feedback in real time. Use GetLance Messages to communicate via text, chat, or video.
                          Use our mobile app. Many features can be accessed on your mobile phone when on the go.</p>
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
</div>
<div className="d-grid gap-2 col-6 mx-auto text-center">
<button type="submit" className="btn btn-outline-primary">Submit</button>
</div>
</div>
  </div>
   {/* feedback begin */}
    </>
  )
}
