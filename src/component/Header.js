import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../css/Header.module.css'
import Logo from '../assets/HZSlogo2.png'

const Header = (props) => {
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

          <button className={classes.Link} onClick={props.modalShow}>
            <span>Log In</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
