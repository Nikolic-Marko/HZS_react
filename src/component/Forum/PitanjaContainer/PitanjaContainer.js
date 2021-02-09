import React from 'react'
import classes from './PitanjaContainer.module.css'
import PitanjaPojedinacna from './PitanjaPojedinacna/PitanjaPojedinacna'

const PitanjaContainer = () => {
  return (
    <div className={classes.PitanjaContainer}>
      <div className={classes.PitanjaHeader}>
        <div className={classes.Left}>
          <p>Topic</p>
        </div>
        <div className={classes.Right}>
          <p>Replies</p>
          <p>Views</p>
          <p>Activity</p>
        </div>
      </div>
      <PitanjaPojedinacna />
      <PitanjaPojedinacna />
      <PitanjaPojedinacna />
    </div>
  )
}

export default PitanjaContainer
