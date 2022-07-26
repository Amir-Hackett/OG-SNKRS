import React, {useState, useEffect } from "react";
import './Nav.css'

function Nav(props) {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  const {
    setHomeSelected,
    setShopSelected,
    setSignUpSelected,
    setLoginSelected
} = props

function renderHome() {
  setShopSelected(false);
  setHomeSelected(true);
  setSignUpSelected(false);
  setLoginSelected(false);
}

function renderShop() {
  setShopSelected(true);
  setHomeSelected(false);
  setSignUpSelected(false);
  setLoginSelected(false);
}

function renderSignUp() {
  setShopSelected(false);
  setHomeSelected(false);
  setSignUpSelected(true);
  setLoginSelected(false);
}

function renderLogin() {
  setShopSelected(false);
  setHomeSelected(false);
  setSignUpSelected(false);
  setLoginSelected(true);
}

return (
    <nav>
    {(toggleMenu || screenWidth > 500) && (
        <div className="nav-list">
            {/* <li className="nav-items">Search</li> */}
            <a onClick={renderHome} className="nav-items">Home</a>
            <a onClick={renderShop} className="nav-items">Shop</a>
            <a onClick={renderSignUp} className="nav-items">Sign Up</a>
            <a onClick={renderLogin} className="nav-items">Log In</a>
        </div>
        )}
        <button onClick={toggleNav}className="btn">Menu</button>
    </nav> 

);

}

export default Nav;
