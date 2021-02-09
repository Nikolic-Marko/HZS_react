import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../css/Header.module.css'
import Logo from '../assets/HZSlogo.png'

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <div className={classes.HeaderWidth}>
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
          <div className={classes.Links}>
            <div className={classes.Text}>2-3 APRILA</div>

            <NavLink to="/forum" className={classes.Link}>
              FORUM
            </NavLink>

            <NavLink to="/error404" className={classes.Link}>
              PRIJAVI SE
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
