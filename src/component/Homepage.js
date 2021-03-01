import React, { useState } from 'react'
import './../App.css'
import Header from './Header'
import Footer from './Footer'
import NasTim from './NasTim/NasTim'
import Landing from './Landing/Landing'
import NajcescaPitanja from './NajcescaPitanja/NajcescaPitanja'
import Partneri from './Partneri/Partneri'
import AboutHakaton from './AboutHakaton/AboutHakaton'
import TimeLine from './TimeLine/TimeLine'
import PartneriTemp from './Partneri/PartneriTemp'
import NavigationDots from './NavigationDots'
import LoginModal from './Forum/LoginModal/LoginModal'

const Homepage = () => {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const modalShow = () => {
    setShowModal(true)
  }

  return (
    <div className="App">
      <NavigationDots />
      <Header modalShow={modalShow} />
      <Landing />
      <AboutHakaton />
      <TimeLine />
      <NasTim />
      <NajcescaPitanja />
      <PartneriTemp />
      <Footer />
      <LoginModal show={showModal} modalClosed={closeModal} />
    </div>
  )
}

export default Homepage
