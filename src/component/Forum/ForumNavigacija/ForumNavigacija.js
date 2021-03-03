import React from 'react'
import classes from './ForumNavigacija.module.css'

const ForumNavigacija = () => {
  return (
    <div className={classes.ForumNavigacija}>
      <select className={classes.ListaKategorija}>
        <option id="radionice">Radionice</option>
        <option id="domaci">Domaći zadatak</option>
        <option id="prezentovanje">Prezentovanje rešenja</option>
        <option id="pravila">Pravila</option>
        <option id="ostalo">Ostalo</option>
      </select>
    </div>
  )
}

export default ForumNavigacija
