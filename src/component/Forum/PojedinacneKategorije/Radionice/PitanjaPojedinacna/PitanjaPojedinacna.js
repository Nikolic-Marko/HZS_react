import React from 'react'
import classes from './PitanjaPojedinacna.module.css'
import { Link } from 'react-router-dom'
import moment from 'moment'

const PitanjaPojedinacna = (props) => {
  return (
    <div className={classes.PitanjaPojedinacna}>
      <Link to={`radionice/${props.id}`}>{props.title}</Link>
      <div className={classes.RightSide}>
        <div className={classes.Datum}>
          {moment.utc(`${props.datum}`).local().startOf('seconds').fromNow()}
        </div>
        <div className={classes.Replies}>{props.komentari.length}</div>
      </div>
    </div>
  )
}

export default PitanjaPojedinacna
