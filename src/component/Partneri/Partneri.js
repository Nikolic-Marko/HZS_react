<<<<<<< HEAD
import React from 'react'
import './Partneri.css'
import NordeusLogo from '../Landing/img/nordeushublogo-pozadina.png'
import AdventureLogo from '../Landing/img/interventurelogo.png'
import Guarana from '../Landing/img/GuaranaLogo.png'
import NordeusLogo1 from '../Landing/img/nordeusLogo.jpg'
import FonLogo from '../Landing/img/fonlogoceo.jpg'
import JafaLogo from '../Landing/img/jaffalogo.png'
import HzsSporedni from '../Landing/img/hzs-sporedni-mali-removebg-preview.png'
import Chipsway from '../Landing/img/chipswaylogo.png'
import ZabacLogo from '../Landing/img/zabaclogo.png'
import BaniniLogo from '../Landing/img/baninilogo.png'

=======
import React from "react";
import "./Partneri.css";
import NordeusLogo from "../Landing/img/nordeushublogo-pozadina.png";
import AdventureLogo from "../Landing/img/interventurelogo.png";
import Guarana from "../Landing/img/GuaranaLogo.png";
import NordeusLogo1 from "../Landing/img/nordeusLogo.jpg";
import FonLogo from "../Landing/img/fonlogoceo.jpg";
import JafaLogo from "../Landing/img/jaffalogo.png";
import HzsSporedni from "../Landing/img/hzs-sporedni-mali-removebg-preview.png";
import Chipsway from "../Landing/img/chipswaylogo.png";
import ZabacLogo from "../Landing/img/zabaclogo.png";
import BaniniLogo from "../Landing/img/baninilogo.png";
>>>>>>> faa9ec72afe5ea6ae067339ce66b750fcbbc8625
const Partneri = () => {
    return (
        <React.Fragment>
            <div className="partners">
                <div className="naslov-partneri">
                    <h1>ZLATNI PARTNER</h1>
                </div>
                <div className="zlatni-partner">
                    <img src={NordeusLogo} alt="" />
                </div>
                <div className="naslov-partneri">
                    <h1>GENERALNI PARTNERI</h1>
                </div>
                <div className="naturalni-partneri">
                    <div className="for-slick-slider autoplay">
                        <div className="items">
                            <img src={AdventureLogo} alt="" />
                        </div>
                        <div className="items">
                            <img src={Guarana} alt="" />
                        </div>
                        <div className="items">
                            <img src={NordeusLogo1} alt="" />
                        </div>
                        <div className="items">
                            <img src={FonLogo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="naslov-partneri">
                    <h1>NATURALNI PARTNERI</h1>
                </div>
                <div className="naturalni-partneri nat">
                    <div className="for-slick-slider autoplay">
                        <div className="items">
                            <img src={JafaLogo} alt="" />
                        </div>
                        <div className="items">
                            <img src={HzsSporedni} alt="" />
                        </div>
                        <div className="items">
                            <img src={Chipsway} alt="" />
                        </div>
                        <div className="items">
                            <img src={ZabacLogo} alt="" />
                        </div>
                        <div className="items">
                            <img src={BaniniLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <script type="text/javascript" src="./slick/slick.min.js"></script>
            <script src="./java.js"></script>
        </React.Fragment>
    );
};

export default Partneri;
