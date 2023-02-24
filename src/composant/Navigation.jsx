import React from "react";
import { NavLink, Route ,Routes} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import ListeClients from "./ListeClients";

const Navigation = () => {
    let activeStyle = {
        background: "red",
      };
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
         Profil : Opérateur de Colis
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
            <li className="nav-item active">
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
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/listeClients"  element={<ListeClients/>}/>
      </Routes>
    </BrowserRouter>
    
  );
};

export default Navigation;
