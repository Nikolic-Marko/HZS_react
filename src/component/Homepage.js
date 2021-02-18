import React from 'react'
import './../App.css'
import Header from './Header'
import Footer from './Footer'
import NasTim from './NasTim/NasTim'
import Landing from './Landing/Landing'
import NajcescaPitanja from './NajcescaPitanja/NajcescaPitanja'
import Partneri from './Partneri/Partneri'

class Homepage extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <NasTim />
        <NajcescaPitanja />
        <Partneri />
        <Footer />
      </div>
    )
  }
}
export default Homepage
