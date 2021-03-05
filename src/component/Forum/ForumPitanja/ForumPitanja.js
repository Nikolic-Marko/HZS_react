import React from 'react'
import Header from '../../Header'
import PitanjaContainer from '../PitanjaContainer/PitanjaContainer'
import classes from './ForumPitanja.module.css'

const ForumPitanja = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={classes.ForumPitanja}>
        <PitanjaContainer />
        
      </div>
    </React.Fragment>
  )
}

export default ForumPitanja
