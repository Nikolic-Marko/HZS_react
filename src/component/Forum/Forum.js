import React, { useState } from 'react'
import Header from '../Header'
import ForumNavigacija from './ForumNavigacija/ForumNavigacija'
import classes from './Forum.module.css'
import ForumKategorije from './ForumKategorije/ForumKategorije'
import ForumLatest from './ForumLatest/ForumLatest'
import Modal from './Modal/Modal'

const Forum = () => {
  const [showModal, setShowModal] = useState(false)

  const showNewTopic = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

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
    <React.Fragment>
      <Header />
      <div className={classes.Background}>
        <div className={classes.Forum}>
          <ForumNavigacija />
          <div className={classes.ForumCentar}>
            <ForumKategorije />
            <ForumLatest />
          </div>
        </div>
      </div>
      <button className={classes.Sticky} onClick={showNewTopic}>
        <i className="fas fa-plus" style={{ color: 'white' }}></i>
      </button>
      <Modal show={showModal} modalClosed={closeModal} />
    </React.Fragment>
  )
}

export default Forum
