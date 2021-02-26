import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Pitanja.module.css'
const Pitanja = (props) => {
    const link = '/forum/' + props.link
    return (
        <div className={classes.svaPitanja}>
            <div className={classes.left}></div>
            <div className={classes.mid}></div>
            <div className={classes.right}></div>
        </div>
    )
}

export default Pitanja
