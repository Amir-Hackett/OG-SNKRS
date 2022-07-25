import React, {useState, useEffect } from "react";
import './Nav.css'


function Nav() {
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

return (
  <nav>
    {/* <a data-testid="link" href="/">
      <h2>OG-SNKRS</h2>
    </a> */}
    {(toggleMenu || screenWidth > 500) && (
        <ul className="nav-list">
            <li className="nav-items">Search</li>
            <li className="nav-items">Home</li>
            <li className="nav-items">Shop</li>
            <li className="nav-items">Sign Up</li>
            <li className="nav-items">Log In</li>
        </ul>
        )}
        <button onClick={toggleNav}className="btn">Button</button>
    </nav>

);

}

export default Nav;
