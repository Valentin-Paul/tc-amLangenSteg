import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import LocomotiveScroll from "locomotive-scroll";
import menuIcon from "../../pages/images/menu.png"

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


  useEffect(()=>{

    let scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: {
        offset: ["50%", "50"],
        breakpoint: 0,
        lerp: 1,
        // getDirection: true,
        smooth: true,
        // smoothMobile: true,
        scrollFromAnywhere: true,
        resetNativeScroll: true
      },
      tablet: {
        lerp: 1,
       breakpoint: 0,
      // getDirection: true,
        smooth: true,
      //   smoothMobile: true,
        scrollFromAnywhere: true,
        resetNativeScroll: true
      }
    })

    const anchorLinks = document.querySelectorAll(
      'a[href^=\\#]:not([href$=\\#])'
    );
  
    anchorLinks.forEach((anchorLink) => {
      let hashval = anchorLink.getAttribute('href');
      let target = document.querySelector(hashval);
      let coordinates = document.getElementById(target.id).getBoundingClientRect().top - 100
     
  
      anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // anchorLinks.forEach((anchorLink) => {
        //   anchorLink.classList.remove('active');
        // });
  
        // e.target.classList.add('active');

      //  var coordinates = target.getBoundingClientRect()

        scroll.scrollTo(coordinates)
      });

    });


 
   
  
  })



  return (


<nav className="navbar navbar-expand-lg " >
  <div className="space-between container-fluid">
    <div className="home-button">

    <Link to="/" >
    <a className="navbar-brand" href="#home" data-scroll-to>Home</a>
    </Link>  

    </div>
   <div className="menu-icon">
   <button  style={{ backgroundImage: `url(${menuIcon})`}} className="navbar-toggler custom-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent" >
      <ul className="navbar-nav space-evenly">
        <li className="nav-item">
          <a className="nav-link active dropdown-item" aria-current="page" href="#aktuelles" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" data-scroll-to>Aktuelles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active dropdown-item" aria-current="page" href="#mannschaften" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" data-scroll-to>Mannschaften</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active dropdown-item" aria-current="page" href="#mitgliedschaft" data-scroll-to>Mitgliedschaft</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mehr
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#kontakt">Kontakt</a></li>
          <li><a className="dropdown-item" href="#vereinsleitung">Vereinsleitung</a></li>
            <li><a className="dropdown-item" href="/agb">AGB/ Impressum</a></li>
          </ul>
        </li>
        
      </ul>
   </div>
   
  
    </div>
  </div>
</nav>

    


    // <nav className="navbar" >
    //   <Link to="/" >
    //     <a href="#home">Home</a>
    //   </Link>     
    //     <a href="#aktuelles" >Aktuelles</a>
      
    //     <a href="#mannschaften" >Mannschaften</a>

    //     <a href="#mitgliedschaft" >Mitgliedschaft</a>
      


    //   {isLoggedIn && (
    //     <>
    //       <button onClick={logOutUser}>Logout</button>

    //       <Link to="/profile">
    //         <a>Profile</a>
    //         {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
    //       </Link>

    //       <span>{user && user.name}</span>
    //     </>
    //   )}

    //   {!isLoggedIn && (
    //     <>
    //       <Link to="/signup">
    //         {" "}
    //         <a>Sign Up</a>{" "}
    //       </Link>
    //       <Link to="/login">
    //         {" "}
    //         <a>Login</a>{" "}
    //       </Link>
    //     </>
    //   )}
    // </nav>
  );
}

export default Navbar;
