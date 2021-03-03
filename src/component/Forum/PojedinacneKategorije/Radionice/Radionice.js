import React from 'react'
import classes from './Radionice.module.css'
import PitanjaPojedinacna from './PitanjaPojedinacna/PitanjaPojedinacna'

const Radionice = () => {
  return (
    <div className={classes.Radionice}>
      <div className={classes.PitanjaContainer}>
        <div className={classes.PitanjaHeader}>
          <div className={classes.Left}>
            <p>Topic</p>
          </div>
          <div className={classes.Right}>
            <p>Replies</p>
            <p>Activity</p>
          </div>
        </div>
        <PitanjaPojedinacna />
        <PitanjaPojedinacna />
        <PitanjaPojedinacna />
      </div>
    </div>
  )
}

export default Radionice
