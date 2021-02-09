import React from 'react'
import classes from './ForumKategorije.module.css'
import { NavLink } from 'react-router-dom'

const ForumKategorije = () => {
  return (
    <div className={classes.ForumKategorije}>
      <div className={classes.Kartica}>
        <div className={classes.Content}>
          <NavLink
            to="/forum/ohakatonu"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <h3>O hakatonu</h3>
          </NavLink>
          <p>Sve sto vas zanima o hakatonu mozete naci ovde.</p>
        </div>
        <div className={classes.Topics}>699</div>
      </div>
      <div className={classes.Kartica}>
        <div className={classes.Content}>
          <NavLink
            to="/forum/prijava"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <h3>Prijava za takmicenje</h3>
          </NavLink>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={classes.Topics}>25</div>
      </div>
      <div className={classes.Kartica}>
        <div className={classes.Content}>
          <NavLink
            to="/forum/ostalo"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <h3>Ostalo</h3>
          </NavLink>
          <p>
            Sve što ne spada ni u jednu drugu kategoriju. Ako ne znate gde,
            postavite vašu temu ovde.
          </p>
        </div>

        <div className={classes.Topics}>134</div>
      </div>
      <div className={classes.Kartica}>
        <div className={classes.Content}>
          <NavLink
            to="/forum/ostalo"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <h3>Ostalo</h3>
          </NavLink>
          <p>
            Sve što ne spada ni u jednu drugu kategoriju. Ako ne znate gde,
            postavite vašu temu ovde.
          </p>
        </div>

        <div className={classes.Topics}>134</div>
      </div>
      <div className={classes.Kartica}>
        <div className={classes.Content}>
          <NavLink
            to="/forum/ostalo"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <h3>Ostalo</h3>
          </NavLink>
          <p>
            Sve što ne spada ni u jednu drugu kategoriju. Ako ne znate gde,
            postavite vašu temu ovde.
          </p>
        </div>

        <div className={classes.Topics}>134</div>
      </div>
    </div>
  )
}

export default ForumKategorije
