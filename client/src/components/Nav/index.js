import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function NavApp() {

  return (
    <ul className="nav-list">
      <li className="nav-items"><Link to="/">Home</Link></li>
      <li className="nav-items"><Link to="/shop">Shop</Link></li>
      <li className="nav-items"><Link to="/signupform">Sign Up</Link></li>
      <li className="nav-items"><Link to="/loginform">Log In</Link></li>
    </ul>
  );


  // const [toggleMenu, setToggleMenu] = useState(false)
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu)
  // }

  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   }

  //   window.addEventListener('resize', changeWidth)

  //   return () => {
  //       window.removeEventListener('resize', changeWidth)
  //   }

  // }, [])

    // <nav>
    //   <ul className="nav-list">
    //     <CustomLink to="/">
    //       <li className="nav-items">Home</li>
    //     </CustomLink>
    //     <CustomLink to="/shop">
    //       <li className="nav-items">Shop</li>
    //     </CustomLink>
    //     <CustomLink className="nav-items" to="/signup">
    //       Sign Up</CustomLink>
    //     <CustomLink to="/login">
    //       <li className="nav-items">Login</li>
    //     </CustomLink>
    //   </ul>
    // </nav>


    // <nav>
    // {(toggleMenu || screenWidth > 500) && (
    //     <ul className="nav-list">
    //         <a href="/" ><li className="nav-items">Home</li></a>
    //         <li className="nav-items">Shop</li>
    //         <a href="/signup" ><li className="nav-items">Sign Up</li></a>
    //         <li className="nav-items">Log In</li>
    //     </ul>
    //     )}
    //     <button onClick={toggleNav}className="btn">Button</button>
    // </nav>
  
}

export default NavApp;
