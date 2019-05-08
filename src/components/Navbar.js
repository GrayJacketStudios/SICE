
import React from 'react'
import { Link } from "react-router-dom";
export default (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
          <p className="navbar-brand">{props.title}</p>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to='/' className="nav-link" >Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to='/mapa' className="nav-link">Mapa</Link>
              </li>
              <li className="nav-item">
                <Link to='/eventos' className="nav-link">Programación eventos</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Consumo</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Administración</Link>
              </li>
            </ul>
            <span className="navbar-text">
              Opciones
            </span>
          </div>
        </nav>
    </div>
  )
}
