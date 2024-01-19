import React, { useState } from 'react'
import "../styles/navbar.css"
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isLogin] = useState(false);

  return (
    <>
      <div className="header-container">

        <div >
          <NavLink to="/">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
        </div>

        <div className='navbar-ul'>
          <ul>
            <li>
              <NavLink to="/" >
                <span class="material-symbols-rounded">
                  home
                </span>
                <div>
                  Home
                </div>
              </NavLink>
            </li>
            <li> <NavLink to="/reels" >
              <span class="material-symbols-rounded">
                play_arrow
              </span> <div>
                Reels
              </div></NavLink>

            </li>
            <li> <NavLink to="/explore">
              <span class="material-symbols-rounded">
                explore
              </span><div>
                Explore
              </div></NavLink> </li>
          </ul>
        </div>

        <div className="profile-container">
          {isLogin ?
            <NavLink to="/profile">
              <span class="material-symbols-rounded">
                person
              </span>
              <div>
                username
              </div>
            </NavLink> :
            <NavLink to="/login">
              <span class="material-symbols-rounded explore-btn">
                login
              </span>
              <div>
                Login/Sign Up
              </div> 
              </NavLink>}
        </div>

      </div>
    </>
  )
}

export default Header