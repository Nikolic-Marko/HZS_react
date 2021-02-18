import React from 'react'
import './../App.css'
import Header from './Header'
import Footer from './Footer'
import NasTim from './NasTim/NasTim'
import NajcescaPitanja from './NajcescaPitanja/NajcescaPitanja'

class Homepage extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NasTim />
        <NajcescaPitanja />
        <Footer />
      </div>
    )
  }
}
export default Homepage
