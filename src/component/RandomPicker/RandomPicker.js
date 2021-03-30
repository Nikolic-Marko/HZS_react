import React, { useState } from 'react'
import './RandomPicker.css'
import Header from './../Header'
import Footer from './../Footer'

const RandomPicker = () => {
  
  return (
    <div>
        <Header />
        <div className = "randomPickerWrap">
            <input></input>
            <button>Dodaj</button>
            <textarea>IMENA</textarea>
            <span>POBEDNIK</span>
            <button>IZABERI POBEDNIKA</button>
        </div>
        <Footer />
    </div>
  )
}

export default RandomPicker
