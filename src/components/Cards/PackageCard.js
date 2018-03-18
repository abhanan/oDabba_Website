import React from 'react'

export default (props) => {
  return (
    <div>
      <div className="card" style={{borderRadius:"12px",boxShadow: "rgba(74, 72, 68, 0.25) 3px 6px 10px -2px"}}>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-outline-dark" style={{color:"#F39C5C"}}>{props.btnText}</a>
        </div>
      </div>
    </div>
  )
}
