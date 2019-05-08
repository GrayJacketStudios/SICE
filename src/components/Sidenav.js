import React from 'react'

export default (props) => {
  return (
    <div className="sidenav">
        <nav className="navbar navbar-light bg-light">
            <form class="form-inline">
                {props.children}
            </form>
        </nav>
      
    </div>
  )
}
