import React, { useState } from 'react'
import Header from '../../../Header'
import ReplyModal from './ReplyModal/ReplyModal'
import PitanjeDiv from './PitanjeDiv/PitanjeDiv'
import Dugme from '../../Dugme/Dugme'
import classes from './PitanjaStranica.module.css'

const PitanjaStranica = () => {
  const [showModal, setShowModal] = useState(false)

  const reply = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <React.Fragment>
      <Header />
      <div className={classes.Container}>
        <div className={classes.TitleDiv}>
          <h2 className={classes.Title}>
            Problem sa prikazivanjem, Problem sa zadatkom
          </h2>
        </div>
        <PitanjeDiv
          name="marko754"
          day="9d"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          click={reply}
        />
        <PitanjeDiv
          name="frenki"
          day="5d"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          click={reply}
        />
        <PitanjeDiv
          name="mirko"
          day="2d"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          click={reply}
        />
        <PitanjeDiv
          name="zorica"
          day="8d"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          click={reply}
        />
      </div>
      <Dugme ikonica="fas fa-reply" click={reply} />
      <ReplyModal show={showModal} modalClosed={closeModal} />
    </React.Fragment>
  )
}

export default PitanjaStranica
