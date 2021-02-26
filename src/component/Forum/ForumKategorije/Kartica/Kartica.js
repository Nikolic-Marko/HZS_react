import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Kartica.module.css'
const Kartica = (props) => {
  const link = '/forum/' + props.link
  return (
    <div
      className={classes.Kartica}
      style={{ borderLeft: '5px solid ' + props.color }}
    >
      <div className={classes.Content}>
        <NavLink to={link} style={{ textDecoration: 'none', color: 'black' }}>
          <h3>{props.heading}</h3>
        </NavLink>
        <p>{props.paragraph}</p>
      </div>
      <div className={classes.Topics}>699</div>
    </div>
  )
}

export default Kartica
