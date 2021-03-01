import React from 'react'
import classes from './ForumLatest'
import Pitanja from './Pitanja/Pitanja.js'

const ForumLatest = () => {
  return (
    <div>
      <p>Poslednje aktivnosti</p>
      <div className={classes.ForumPitanja}>
        <Pitanja logo username naslov kategorija />
      </div>
    </div>
  )
}

export default ForumLatest
