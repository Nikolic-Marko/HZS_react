import React from "react";
import "./PartneriTemp.css";
import Guarana from "../Landing/img/GuaranaLogo.png";
import FonLogo from "../Landing/img/fonlogoceo.jpg";
import ComeTrade from "../Landing/img/ComTrade-logo.png";

const PartneriTemp = () => {
    return (
        <React.Fragment>
            <div className="partners" id="partners">
                <div className="generalniPartneriNaslov">
                    <h1>GENERALNI PARTNERI</h1>
                </div>
                <div className="slikeOmotac" id="slika2">
                    <div className="slikePartnera">
                        <a href="https://www.comtrade.com/"><img src={ComeTrade} alt="ComTrade" /></a>
                    </div>
                    <div className="slikePartnera" id="slika1">
                        <a href="https://guarana.rs/"><img src={Guarana} alt="" /></a>
                    </div>
                    <div className="slikePartnera">
                        <a href="http://www.fon.bg.ac.rs/"><img src={FonLogo} alt="" /></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PartneriTemp;
