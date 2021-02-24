import React from 'react'
import Header from '../../Header'
import ForumNavigacija from '../ForumNavigacija/ForumNavigacija'
import PitanjaContainer from '../PitanjaContainer/PitanjaContainer'
import classes from './ForumPitanja.module.css'

const ForumPitanja = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={classes.ForumPitanja}>
        <ForumNavigacija />
        <PitanjaContainer />
        
      </div>
    </React.Fragment>
  )
}

export default ForumPitanja
