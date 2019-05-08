import React from 'react'
import Card from "../components/Card";
import Sidenav from '../components/Sidenav';
import {  Route, Link } from "react-router-dom";

export default (props) => {
  return (
    <div>
      <Card titulo="Eventos">

        <Sidenav>
            <Link to={`/eventos`} className="btn btn-secondary">Eventos activos</Link> 
            <Link to={`/eventos/Horario`} className="btn btn-info">Eventos por horario</Link> 
            <Link to={`/eventos/Calendario`} className="btn btn-info">Eventos por calendario</Link> 
            <Link to={`/eventos/Hooks`} className="btn btn-info">Eventos por hooks</Link>
        </Sidenav>
        <Route exact path={'/eventos/'} component={vacio} />
        <Route path={`/eventos/Horario`} component={horario} />
        <Route path={`/eventos/Calendario`} component={calendario} />
        <Route path={`/eventos/Hooks`} component={hooks} />
      </Card>
    </div>
  )

function vacio(){
    return (
        <div>
            Lista de eventos activos:
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Zona</th>
                        <th>Tipo de evento</th>
                        <th>Modo</th>
                        <th>Acción</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Habitacion 7</td>
                        <td>Horario</td>
                        <td>Incluyente</td>
                        <td>Cortar</td>
                        <td><button type="button" className="btn btn-danger btn-sm">stop</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Habitacion 3, Habitacion 2</td>
                        <td>Calendario</td>
                        <td>Incluyente</td>
                        <td>Cortar</td>
                        <td><button type="button" className="btn btn-danger btn-sm">stop</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Habitacion 3</td>
                        <td>Hook</td>
                        <td>Incluyente</td>
                        <td>Cortar</td>
                        <td><button type="button" className="btn btn-danger btn-sm">stop</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}



function horario(){
    return (
        <div>
    
            <h3>Eventos por horario <button type="button" className="btn btn-success">Nuevo evento</button></h3> 
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Zona</th>
                        <th>Hora inicio</th>
                        <th>Hora termino</th>
                        <th>Dias de la semana</th>
                        <th>Modo</th>
                        <th>Acción</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Habitacion 7</td>
                        <td>23:05</td>
                        <td>05:15</td>
                        <td>Sab, Dom</td>
                        <td>Incluyente</td>
                        <td>Cortar</td>
                        <td><button type="button" className="btn btn-warning btn-sm">edit</button>|<button type="button" className="btn btn-danger btn-sm">dlt</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function calendario(){
    return (
        <div>
    
            <h3>Eventos por calendario <button type="button" className="btn btn-success">Nuevo evento</button></h3> 
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Zona</th>
                        <th>Fecha de inicio</th>
                        <th>Fecha de termino</th>
                        
                        <th>Modo</th>
                        <th>Acción</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3</td>
                        <td>Habitacion 3, Habitacion 2</td>
                        <td>23/05/2019</td>
                        <td>30/05/2019</td>

                        <td>Incluyente</td>
                        <td>Cortar</td>
                        <td><button type="button" className="btn btn-warning btn-sm">edit</button>|<button type="button" className="btn btn-danger btn-sm">dlt</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


function hooks(){
    return (
        <div>
    
            <h3>Eventos por hooks <button type="button" className="btn btn-success">Nuevo evento</button></h3> 
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Zona</th>
                        <th>hook iniciar</th>
                        <th>hook detener</th>
                        
                        <th>Modo</th>
                        <th>Acción</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4</td>
                        <td>Habitacion 3</td>
                        <td>http://154.25.125.21/541244/541/action=21</td>
                        <td>http://154.25.125.21/541244/541/action=22</td>

                        <td>Incluyente</td>
                        <td>Cortar</td>
                        <td><button type="button" className="btn btn-warning btn-sm">edit</button>|<button type="button" className="btn btn-danger btn-sm">dlt</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


}
