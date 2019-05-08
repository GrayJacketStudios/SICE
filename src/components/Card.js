import React from 'react'

export default (props) => {
  return (
    <div className="card">
        <h5 className="card-header">{props.titulo}</h5>
        <div className="card-body">
            {props.children}
        </div>
    </div>
  )
}
