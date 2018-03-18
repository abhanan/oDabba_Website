import React from 'react';

export default (props) => {
  return (
    <div className="container-fluid pb-3" style={{background:"#EBE5D8", marginTop:"60px"}}>
    <div className="container">
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
    <p style={{fontFamily :"Poppins", fontSize:"40px", fontWeight:"700", paddingTop:"50px", paddingBottom:"1px",textAlign:"left"}}>oDabba</p>
    <h2 style={{fontFamily:"Poppins", fontSize:"15px", fontWeight:"400", paddingTop:"0px", textAlign:"left"}}> Making tummies happy by delivering lunch at work. </h2>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
    <p style={{fontFamily:"Poppins", fontSize:"20px", fontWeight:"700", paddingTop:"50px"}}>Get the App</p>
    <a href="#"><img src="google_play_btn.png" style={{width:"130px",height:"40px"}}></img></a>
      </div>
      </div>
      <div className="row pt-4 pb-4">

      <div className= "col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-4">
      <ul className="nav justify-content-left">
    <li className="nav-item">
    <a className="nav-link" href="#">Packages</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Terms of service</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Careers</a>
  </li>
</ul>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <a href="#"><img src="fb_logo.png" style={{width:"35px",height:"30px"}}></img></a>
      <a href="#"><img src="sc_logo.png" style={{width:"35px",height:"30px"}}></img></a>
      <a href="#"><img src="tw_logo.png" style={{width:"35px",height:"30px"}}></img></a>
      <a href="#"><img src="ig_logo.png" style={{width:"35px",height:"30px"}}></img></a>
      </div>
      </div>
    </div>
     
    </div>
  )
}
