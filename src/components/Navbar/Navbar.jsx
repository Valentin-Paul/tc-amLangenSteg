import "./Navbar.css";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../context/auth.context";
import {useLocomotiveScroll, LocomotiveScrollProvider} from 'react-locomotive-scroll';
import menuIcon from "../../pages/images/menu.png"
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const { scroll } = useLocomotiveScroll();

  const goToSection = (section) => {
    if(section == "#home"){
      scroll && scroll.scrollTo(section)
      scroll && scroll.scrollTo(0,0)
    }
    else{
      scroll && scroll.scrollTo(section)
    }
    
  }

  return (


<nav className="navbar navbar-expand-lg " data-scroll-section data-scroll>
  <div className="space-between container-fluid">
    <div className="home-button">

    <Link to="/" >
    <a className="navbar-brand" onClick={() => goToSection('#home')}  >Home</a>
    </Link>  

    </div>
   <div className="menu-icon">
   <button  style={{ backgroundImage: `url(${menuIcon})`}} className="navbar-toggler custom-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent" >
      <ul className="navbar-nav space-evenly">
        <li className="nav-item">
          <a className="nav-link active dropdown-item" aria-current="page"  data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"  onClick={() => goToSection('#aktuelles')}>Aktuelles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active dropdown-item" aria-current="page"  data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"  onClick={()=>goToSection('#mannschaften')}>Mannschaften</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active dropdown-item" aria-current="page"  data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"  onClick={()=>goToSection('#mitgliedschaft')}>Mitgliedschaft</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Mehr
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item"  onClick={() => goToSection('#kontakt')}>Kontakt</a></li>
          <li><a className="dropdown-item"  onClick={() => goToSection('#vereinsleitung')}>Vereinsleitung</a></li>
          <li><a className="dropdown-item" href="/agb">AGB/ Impressum</a></li>
          <li><a className="dropdown-item" href="/blog">Archiv</a></li>
          </ul>
        </li>
        
      </ul>
   </div>
   
  
    </div>
  </div>
</nav>
    
  );
}

export default Navbar;

