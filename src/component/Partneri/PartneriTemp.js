import React from 'react'
import './PartneriTemp.css'
import Guarana from '../Landing/img/GuaranaLogo.png'
import FonLogo from '../Landing/img/fonlogoceo.jpg'

const PartneriTemp = () => {
    return (
        <React.Fragment>
            <div className="partners">
                <div className="generalniPartneriNaslov">
                    <h1>GENERALNI PARTNERI</h1>
                </div>
                <div className="slikeOmotac">
                    <div className="slikePartnera" id="slika1">
                        <img src={Guarana} alt="" />
                    </div>
                    <div className="slikePartnera">
                        <img src={FonLogo} alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PartneriTemp
