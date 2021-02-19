import React from 'react'
import './../App.css'
import Header from './Header'
import Footer from './Footer'
import NasTim from './NasTim/NasTim'
import Landing from './Landing/Landing'
import NajcescaPitanja from './NajcescaPitanja/NajcescaPitanja'
import Partneri from './Partneri/Partneri'
import AboutHakaton from './AboutHakaton/AboutHakaton'
import TimeLine from './TimeLine/TimeLine'

class Homepage extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <AboutHakaton />
        <TimeLine />
        <NasTim />
        <NajcescaPitanja />
        <Partneri />
        <Footer />
      </div>
    )
  }
}
export default Homepage
