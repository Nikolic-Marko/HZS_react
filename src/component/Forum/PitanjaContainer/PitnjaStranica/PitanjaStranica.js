import React from 'react'
import Header from '../../../Header'
import Modal from '../../Modal/Modal'
import PitanjeDiv from './PitanjeDiv/PitanjeDiv'
import Dugme from '../../Dugme/Dugme'

const PitanjaStranica = () => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <div>OVDE STOJI NASLOV</div>
        <PitanjeDiv />
        <PitanjeDiv />
        <PitanjeDiv />
        <PitanjeDiv />
      </div>
      <Dugme />
    </React.Fragment>
  )
}

export default PitanjaStranica
