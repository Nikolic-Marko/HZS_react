import React from 'react'
import classes from './PitanjaPojedinacna.module.css'
import { Link } from 'react-router-dom'

const PitanjaPojedinacna = () => {
  return (
    <div className={classes.PitanjaPojedinacna}>
      <Link to="/forum/ostalo/1">EVO NEKO PITANJE OVDE</Link>
    </div>
  )
}

export default PitanjaPojedinacna
