import React from 'react'
import './Partneri.css'
import NordeusLogo from '../Landing/img/nordeushublogo-pozadina.png'
import AdventureLogo from '../Landing/img/interventurelogo.png'
import Guarana from '../Landing/img/GuaranaLogo.png'
import NordeusLogo1 from '../Landing/img/nordeusLogo.jpg'
import ComtradeLogo from '../Landing/img/ComtradeLogo.jpg'
import FonLogo from '../Landing/img/fonlogoceo.jpg'
import JafaLogo from '../Landing/img/jaffalogo.png'
import HzsSporedni from '../Landing/img/hzs-sporedni-mali-removebg-preview.png'
import Chipsway from '../Landing/img/chipswaylogo.png'
import ZabacLogo from '../Landing/img/zabaclogo.png'
import TonusGymLogo from '../Landing/img/tonusgymlogo.png' 
import BaniniLogo from '../Landing/img/baninilogo.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Partneri = () => {

  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 1300 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1300, min: 1000 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1000, min: 700 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 2,
    },
};


  return (
    <React.Fragment>
   <div className="partneri">
   <h1 className="naslov">PARTNERI</h1>
        <div className="naslov-partneri">
          <h1>GENERALNI</h1>
        </div>
        <div className="generalni-partneri"> 
        
        <div className="sponzor-slika">
        <img src={ComtradeLogo} alt="" />
        </div>
        <div className="sponzor-slika">
        <img src={Guarana} alt="" />
        </div>
        <div className="sponzor-slika">
        <img src={FonLogo} alt="" />
        </div>
        </div>
        <div className="naslov-partneri">
          <h1>ROBNI</h1>
        </div>
        <div className="generalni-partneri robni-partneri"> 
        
        <div className="sponzor-slika">
        <img src={JafaLogo} alt="" />
        </div>
        <div className="sponzor-slika">
        <img src={Chipsway} alt="" />
        </div>
        <div className="sponzor-slika">
        <img src={ZabacLogo} alt="" />
        </div>
        <div className="sponzor-slika">
        <img src={BaniniLogo} alt="" />
        </div>
        <div className="sponzor-slika">
        <img src={TonusGymLogo} alt="" />
        </div>
        
        </div>
        <div className="naslov-partneri">
                <h1>MEDIJSKI</h1>
        </div>
   <div className="slider">
  
   <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1000} infinite={true} showDots={false} arrows={false}>
          <div className="card"><img src={AdventureLogo} alt="" /></div>
          <div className="card"><img src={Chipsway} alt="" /></div>
          <div className="card"><img src={Guarana} alt="" /></div>
          <div className="card"><img src={BaniniLogo} alt="" /></div>
          <div className="card"><img src={TonusGymLogo} alt="" /></div>
          <div className="card"><img src={FonLogo} alt="" /></div>
</Carousel>;
      
      </div> 

      </div>
    </React.Fragment>
  )
}

export default Partneri
