import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../css/Header.module.css'
import Logo from '../assets/HZSlogo2.png'

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <div className={classes.HeaderWidth}>
          <NavLink to="/2020">
            <img src={Logo} alt="logo" />
          </NavLink>
          <div className={classes.Links}>
            <div className={classes.Text}>2-3 APRILA</div>

            <NavLink to="/forum" className={classes.Link}>
            <span>Forum</span>
            </NavLink>

            <NavLink to="/prijava" className={classes.Link}>
              <span>Log In</span>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
