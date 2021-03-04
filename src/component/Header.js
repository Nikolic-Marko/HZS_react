import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../css/Header.module.css'
import Logo from '../assets/HZSlogo1.jpeg'
import { connect } from 'react-redux'

const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const signOut = () => {
    localStorage.clear()
    window.location.reload(false)
  }

  return (
    <div className={classes.Header} id="home">
      <div className={classes.HeaderWidth}>
        <NavLink to="/2021">
          <img src={Logo} alt="logo" />
        </NavLink>
        <div className={classes.Links}>
          <div className={classes.Text}>2-3 APRILA</div>

          <NavLink to="/forum" className={classes.Link}>
            <span>Forum</span>
          </NavLink>

          {!props.isAuthenticated ? (
            <button className={classes.Link} onClick={props.modalShow}>
              <span>Log In</span>
            </button>
          ) : (
            <button onClick={signOut} className={classes.Link}>
              Sign Out
            </button>
          )}
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
