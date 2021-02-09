import React from 'react'
import classes from './ForumNavigacija.module.css'

const ForumNavigacija = () => {
  return (
    <div className={classes.ForumNavigacija}>
      {/* PRIVREMENO SU <BUTTON/> */}
      <button>SVE KATEGORIJE</button>
      <button>KATEGORIJE</button>
      <button>NAJNOVIJE</button>
    </div>
  )
}

export default ForumNavigacija
