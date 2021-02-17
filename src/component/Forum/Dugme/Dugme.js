import React from 'react'
import classes from './Dugme.module.css'

const Dugme = (props) => {
  return (
    <button className={classes.Sticky} onClick={props.click}>
      <i className={`${props.ikonica}`} style={{ color: 'white' }}></i>
    </button>
  )
}

export default Dugme
