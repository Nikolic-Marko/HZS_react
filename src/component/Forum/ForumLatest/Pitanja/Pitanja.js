import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import classes from './Pitanja.module.css'
const Pitanja = (props) => {
  useEffect(() => {
    console.log(props.category.replace(/\s+/g, ''))
  }, [])
  const link = '/forum/' + props.link
  return (
    <div className={classes.Container}>
      <div className={classes.Left}>
        <Link
          to={`/forum/${props.category.replace(/\s+/g, '').toLowerCase()}/${
            props.id
          }`}
          className={classes.Naslov}
        >
          {props.title}
        </Link>
        <div className={classes.Kategorija}>{props.category}</div>
      </div>
      <div className={classes.Right}>
        <div className={classes.Replies}>{props.replies}</div>
        <div className={classes.Activity}>{props.datum}</div>
      </div>
    </div>
  )
}

export default Pitanja
