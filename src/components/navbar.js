import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) =>{
   
    return(
    <nav>
        <h2 className="logo"><a href="#" className="logo-link">{props.title}</a></h2>
        <ul className="nav-menu">
          <li><NavLink to="/" exact className="nav-menu__link">Home</NavLink></li>
          <li><NavLink to="/actors" className="nav-menu__link">Best Actors</NavLink></li>
          <li><NavLink to="/actress" className="nav-menu__link">Best Actress</NavLink></li>
          <li><NavLink to="/films" className="nav-menu__link">Best Films</NavLink></li>
        </ul>
      </nav>
    )
}

export default Navbar;