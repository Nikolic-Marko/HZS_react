import React, { Component, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import classes from '../css/Header.module.css'
import Logo from '../assets/HZSlogo1.jpeg'
import { connect } from 'react-redux'
import Menu from '../assets/menu.ico'
import X from "../assets/x.ico";

const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const signOut = () => {
    localStorage.clear()
    window.location.reload(false)
  }
  const [showMenu, setShowMenu] = useState(false);

  let menu

  if (showMenu) {
    menu =
      <div className={classes.NB_resp}>
        <NavLink to="/forum" className={classes.Link_resp}>
          <span>Forum</span>
        </NavLink>

        {!props.isAuthenticated ? (
          <button className={classes.Link_resp} onClick={props.modalShow}>
            <span>Prijavi se</span>
          </button>
        ) : (
          <div>
            <NavLink className={classes.Link_resp} to="/forum/MojiPostovi">
              Postovi
      </NavLink>
            <button onClick={signOut} className={classes.Link_resp}>
              <p>Odjavi se</p>
            </button>
          </div>
        )}
      </div>
  }

  return (
    <div className={classes.Header} id="home">
      <div className={classes.HeaderWidth}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className={classes.Links}>
          <div className={classes.Text}>2-3 APRILA</div>
          <div className={classes.IconsMenu}>
            <img src={Menu} alt="Hamburger" className={classes.hamburger}
              onClick={() => setShowMenu(!showMenu)} />
          </div>
          <div className={classes.NB}>
            <NavLink to="/forum" className={classes.Link}>
              <span>Forum</span>
            </NavLink>

            {!props.isAuthenticated ? (
              <button className={classes.Link} onClick={props.modalShow}>
                <span>Prijavi se</span>
              </button>
            ) : (
              <div>
                <NavLink className={classes.Link} to="/forum/MojiPostovi">
                  Moji Postovi
              </NavLink>
                <button onClick={signOut} className={classes.Link}>
                  <p>Odjavi se</p>
                </button>
              </div>
            )}
          </div>
          {menu}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  }
}

export default connect(mapStateToProps)(Header)
