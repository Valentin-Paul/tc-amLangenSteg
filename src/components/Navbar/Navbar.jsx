import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";
import LocomotiveScroll from "locomotive-scroll";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);



  useEffect(()=>{

    let scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container"),
      smooth: true
    })

    const anchorLinks = document.querySelectorAll('a[href^=\\#]:not([href$=\\#])');

    anchorLinks.forEach((anchorLink) => {
      let hashval = anchorLink.getAttribute('href');
      let target = document.querySelector(hashval);
  
      anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
  
        scroll.scrollTo(target);
      });
    });
  })



  return (
    <nav className="navbar" >
      <Link to="/" >
        <a href="#home">Home</a>
      </Link>     
        <a href="#aktuelles" >Aktuelles</a>
      
        <a href="#mannschaften" >Mannschaften</a>

        <a href="#mitgliedschaft" >Mitgliedschaft</a>
      


      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <a>Profile</a>
            {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
          </Link>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <a>Sign Up</a>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <a>Login</a>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
