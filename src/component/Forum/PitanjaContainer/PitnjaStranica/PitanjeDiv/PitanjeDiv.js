import classes from './PitanjeDiv.module.css'
import React from 'react'

const PitanjeDiv = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.NameDay}>
        <span className={classes.Name}>{props.name}</span>
        <span className={classes.Day}>{props.day}</span>
      </div>
      <div className={classes.Text}>{props.text}</div>
      <div className={classes.Reply}>
        <button className={classes.Button} onClick={props.click}>
          <i className="fas fa-reply" style={{ color: '#666666' }}></i>
          <span className={classes.ReplyText}>Reply</span>
        </button>
      </div>
    </div>
  )
}

export default PitanjeDiv
