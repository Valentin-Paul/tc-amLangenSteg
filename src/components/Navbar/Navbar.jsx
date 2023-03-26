import "./Navbar.css";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../context/auth.context";
import {useLocomotiveScroll, LocomotiveScrollProvider} from 'react-locomotive-scroll';
import menuIcon from "../../pages/images/menu.png"
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  // const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    // const { scroll } = useLocomotiveScroll();

  // useEffect(()=>{

  //   // let scroll = new LocomotiveScroll({
  //   //   el: document.querySelector("[data-scroll-container]"),
  //   //   smooth: true,
  //   //   smartphone: {
  //   //     offset: ["50%", "50"],
  //   //     breakpoint: 0,
  //   //     lerp: 1,
  //   //     // getDirection: true,
  //   //     smooth: true,
  //   //     // smoothMobile: true,
  //   //     scrollFromAnywhere: true,
  //   //     resetNativeScroll: true
  //   //   },
  //   //   tablet: {
  //   //     lerp: 1,
  //   //    breakpoint: 0,
  //   //   // getDirection: true,
  //   //     smooth: true,
  //   //   //   smoothMobile: true,
  //   //     scrollFromAnywhere: true,
  //   //     resetNativeScroll: true
  //   //   }
  //   // })

  //   const anchorLinks = document.querySelectorAll(
  //     'a[href^=\\#]:not([href$=\\#])'
  //   );
  
  //   anchorLinks.forEach((anchorLink) => {
  //     let hashval = anchorLink.getAttribute('href');
  //     let target = document.querySelector(hashval);
  //     let coordinates = document.getElementById(target.id).getBoundingClientRect().top - 100
     
  
  //     anchorLink.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       e.stopPropagation();

  //       // anchorLinks.forEach((anchorLink) => {
  //       //   anchorLink.classList.remove('active');
  //       // });
  
  //       // e.target.classList.add('active');

  //     //  var coordinates = target.getBoundingClientRect()
        
  //       scroll.scrollTo(coordinates)
        
  //       console.log(coordinates)
  //     });

  //   });
  // },[])



 
  // const history = useNavigate();
  // const { scroll } = useLocomotiveScroll();

  // const scrollToContainer = (containerId) => {
  //   const container = document.querySelector(containerId);
  //   if (container) {
  //     container.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // useEffect(() => {
  //   scroll && scroll.scrollTo(history.location); // Reset scroll position to top of page on route change
  //   console.log(history.location)
  // }, [history.location]);


  // const scrollToContainer = ( containerId) => {

  //   const container = document.querySelector(containerId);
  //   if (container) {
  //     container.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

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
