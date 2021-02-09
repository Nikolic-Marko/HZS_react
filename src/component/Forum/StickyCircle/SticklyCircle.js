import React from 'react'
import { Sticky } from 'react-sticky'
import { css } from '@emotion/react'
import classes from './StickyCircle.module.css'

const SticklyCircle = () => {
  const styleTopic = {
    height: '4rem',
    width: '4rem',
    backgroundColor: '#18bc9c',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '85%',
    left: '92%',
    boxShadow: '0 4px 8px #ccc',
    border: 'none',
    ':active': {
      color: 'red',
    },
  }
  return (
    <button className={classes.Sticky}>
      <i className="fas fa-plus"></i>
    </button>
  )
}

export default SticklyCircle
