import React from 'react'
import classes from './ForumNavigacija.module.css'

const ForumNavigacija = () => {
  return (
    <div className={classes.ForumNavigacija}>
      {/* PRIVREMENO SU <BUTTON/> */}
      <select className={classes.ListaKategorija}>
      <option>O hakatonu</option>
        <option>O hakatonu</option>
        <option>Prijava za takmicenje</option>
        <option>Ostalo</option>
      </select>
      <button>KATEGORIJE</button>
      <button>NAJNOVIJE</button>
    </div>
  )
}

export default ForumNavigacija
