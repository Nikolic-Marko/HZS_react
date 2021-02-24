import React, { useState } from 'react'
import Header from '../Header'
import ForumNavigacija from './ForumNavigacija/ForumNavigacija'
import classes from './Forum.module.css'
import ForumKategorije from './ForumKategorije/ForumKategorije'
import ForumLatest from './ForumLatest/ForumLatest'
import Modal from './Modal/Modal'
import Dugme from './Dugme/Dugme'
import LoginModal from './LoginModal/LoginModal'

const Forum = () => {
  const [showModal, setShowModal] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const showNewTopic = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const showLoginHandler = () => {
    setShowLogin(true)
  }

  const closeLoginHandler = () => {
    setShowLogin(false)
  }

  return (
    <React.Fragment>
      <Header modalShow={showLoginHandler} />
      <div className={classes.Background}>
        <div className={classes.Forum}>
          <ForumNavigacija />
          <div className={classes.ForumCentar}>
            <ForumKategorije />
            <ForumLatest />
          </div>
        </div>
      </div>
      <Dugme click={showNewTopic} ikonica="fas fa-plus" />
      <Modal show={showModal} modalClosed={closeModal} />
      <LoginModal show={showLogin} modalClosed={closeLoginHandler} />
    </React.Fragment>
  )
}

export default Forum
