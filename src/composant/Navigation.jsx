import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Navigation = () => {
    let activeStyle = {
        background: "red",
      };
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
         Profil Operateur colis
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li class="nav-item active">
            <NavLink className="nav-link"  to="/" style ={({isActive})=>
                    isActive ? activeStyle : undefined }>
                Login 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" style ={({isActive})=>
                    isActive ? activeStyle : undefined }>
               Register
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/listeClients" style ={({isActive})=>
                    isActive ? activeStyle : undefined }>
               Liste client
              </NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    </BrowserRouter>
    
  );
};

export default Navigation;
