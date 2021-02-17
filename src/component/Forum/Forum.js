import React, { useState } from 'react'
import Header from '../Header'
import ForumNavigacija from './ForumNavigacija/ForumNavigacija'
import classes from './Forum.module.css'
import ForumKategorije from './ForumKategorije/ForumKategorije'
import ForumLatest from './ForumLatest/ForumLatest'
import Modal from './Modal/Modal'
import Dugme from './Dugme/Dugme'

const Forum = () => {
  const [showModal, setShowModal] = useState(false)

  const showNewTopic = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
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
      <Dugme click={showNewTopic} />
      <Modal show={showModal} modalClosed={closeModal} />
    </React.Fragment>
  )
}

export default Forum
