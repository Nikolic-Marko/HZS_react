import React from 'react'
import classes from './ForumNavigacija.module.css'

const ForumNavigacija = () => {
  return (
    <div className={classes.ForumNavigacija}>
      {/* PRIVREMENO SU <BUTTON/> */}
      <select className={classes.ListaKategorija}>
      <option>Radionice</option>
        <option>Domaći zadatak</option>
        <option>Prezentovanje rešenja</option>
        <option>Pravila</option>
        <option>Pravila</option>
        <option>Ostalo</option>
      </select>
      <button>KATEGORIJE</button>
      <button>NAJNOVIJE</button>
    </div>
  )
}

export default ForumNavigacija
