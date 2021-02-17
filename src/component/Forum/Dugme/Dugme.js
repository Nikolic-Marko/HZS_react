import React from 'react'
import classes from './Dugme.module.css'

const Dugme = (props) => {
  return (
    <button className={classes.Sticky} onClick={props.click}>
      <i className="fas fa-plus" style={{ color: 'white' }}></i>
    </button>
  )
}

export default Dugme
