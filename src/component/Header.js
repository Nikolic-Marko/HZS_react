import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "../css/Header.module.css";
import Logo from "../assets/HZSlogo2.png";

<<<<<<< HEAD
const Header = (props) => {
  return (
    <div className={classes.Header}>
      <div className={classes.HeaderWidth}>
        <NavLink to="/">
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
=======
class Header extends Component {
    render() {
        return (
            <div className={classes.Header} id="home">
                <div className={classes.HeaderWidth}>
                    <NavLink to="/">
                        <img src={Logo} alt="logo" />
                    </NavLink>
                    <div className={classes.Links}>
                        <div className={classes.Text}>2-3. APRILA</div>
{/* 
                        <NavLink to="/forum" className={classes.Link}>
                            <span>Forum</span>
                        </NavLink>

                        <NavLink to="/2020" className={classes.Link}>
                            <span>Log In</span>
                        </NavLink> */}
                    </div>
                </div>
            </div>
        );
    }
>>>>>>> faa9ec72afe5ea6ae067339ce66b750fcbbc8625
}

export default Header;
