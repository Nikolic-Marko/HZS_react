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
import Sessame from '../Landing/img/Sessame.png'
import Kampster from '../Landing/img/Kampster.png'
import Laguna from '../Landing/img/Laguna.png'
import Eden from '../Landing/img/EDEN.jpg'
import CatenaLogo from '../Landing/img/CatenaLogo.jpg'
import RaiffeisenLogo from '../Landing/img/RaiffeisenLogo.png'
import HelloWorld from '../Landing/img/HelloWorld.png'
import BestLogo from '../Landing/img/BestLogo.png'
import PrijemniLogo from '../Landing/img/PrijemniLogo.png'
import eestecLogo from '../Landing/img/eestecLogo.png'
import SmartLogo from '../Landing/img/SmartLogo.jpg'
import CentarLogo from '../Landing/img/CentarLogo.png'
import AIESECLogo from '../Landing/img/AIESECLogo.png'
import YouthLogo from '../Landing/img/YouthLogo.png'
import BibliotekaLogo from '../Landing/img/BibliotekaLogo.jpg'
import FontanaLogo from '../Landing/img/FontanaLogo.jpg'
import BugiLogo from '../Landing/img/BugiLogo.PNG'
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
      <div className="partneri" id="partners">
        <h1 className="naslov">PARTNERI</h1>
        <div className="naslov-partneri">
          <h1>GENERALNI</h1>
        </div>
        <div className="generalni-partneri">
        <a href="https://www.comtrade.com/"><div className="sponzor-slika">
            <img src={ComtradeLogo} alt="" />
          </div>
          </a>
          <a href="https://guarana.rs/"><div className="sponzor-slika">
            <img src={Guarana} alt="" />
          </div>
          </a>
          <a href="http://www.fon.bg.ac.rs/"><div className="sponzor-slika">
            <img src={FonLogo} alt="" />
          </div>
          </a>
        </div>
        <div className="generalni-partneri">
        <a href="https://www.raiffeisenbank.rs/"><div className="sponzor-slika">
            <img src={RaiffeisenLogo} alt="" />
          </div>
          </a>
          <a href="https://www.catenamedia.com/"><div className="sponzor-slika">
            <img src={CatenaLogo} alt="" />
          </div>
          </a>
        </div>
        <div className="naslov-partneri">
          <h1>NATURALNI</h1>
        </div>
        <div className="slider">

          <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1000} infinite={true} showDots={false} arrows={false}>
            <div className="card"><img src={ZabacLogo} alt="" /></div>
            <div className="card"><img src={Kampster} alt="" /></div>
            <div className="card"><img src={Eden} alt="" /></div>
            <div className="card"><img src={Laguna} alt="" /></div>
            <div className="card"><img src={Sessame} alt="" /></div>
            <div className="card"><img src={BugiLogo} alt="" /></div>
            <div className="card"><img src={FontanaLogo} alt="" /></div>
            <div className="card"><img src={BibliotekaLogo} alt="" /></div>
          </Carousel>;

      </div>
        <div className="naslov-partneri">
          <h1>MEDIJSKI</h1>
        </div>
        <div className="slider">

          <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1000} infinite={true} showDots={false} arrows={false}>
            <div className="card"><img src={HelloWorld} alt="" /></div>
            <div className="card"><img src={PrijemniLogo} alt="" /></div>
            <div className="card"><img src={BestLogo} alt="" /></div>
            <div className="card"><img src={eestecLogo} alt="" /></div>
            <div className="card"><img src={YouthLogo} alt="" /></div>
            <div className="card"><img src={SmartLogo} alt="" /></div>
            <div className="card"><img src={AIESECLogo} alt="" /></div>
            <div className="card"><img src={CentarLogo} alt="" /></div>
          </Carousel>;

      </div>

      </div>
    </React.Fragment>
  )
}

export default Partneri

