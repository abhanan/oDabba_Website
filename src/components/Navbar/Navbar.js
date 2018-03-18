import React from 'react'

export default () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light pb-4 pt-4" style={{boxShadow: "0 2px 6px -2px rgba(0,0,0,.25)"}}>
        <a className="navbar-brand" href="#">Navbar w/ text</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="nav navbar-nav pl-5 mr-auto ">
            <li className="nav-item active pr-2">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item pr-2">
                <a className="nav-link" href="#">Packages</a>
            </li>
            <li className="nav-item pr-2">
                <a className="nav-link pr-2" href="#">About</a>
            </li>
             <a className="btn btn-outline-success pr-2" style={{width: "100px",height:"40px",textAlign:"center" }} >
                Login    
            </a>
            </ul>
           
        </div>
        </nav>
    </div>
  )
}
