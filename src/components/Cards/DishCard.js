import React from 'react';

export default (props) => {
  return (
    <div>
      <div className="card m-3" style={{borderRadius:"12px",boxShadow: "rgba(74, 72, 68, 0.25) 3px 6px 10px -2px"}}>
        <div className="card-body">
            <strong><h4 className="card-title">{props.title}</h4></strong>
            <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}