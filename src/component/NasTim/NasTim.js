import React from "react";
import "./NasTim.css";
import Email from "../../assets/email.png";
import LinkedIn from "../../assets/linkedin.png";
import LinkedInWhite from "../../assets/linkedinwhite.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { NavLink } from "react-router-dom";
import Marija from './img/MarijaCrno.png'
import Milica from './img/MilicaCrno.png'
import Jana from './img/JanaCrno.png'
import Tijana from './img/TijanaCrno.png'
import Nastasja from './img/NastasjaCrno.png'
import Sasa from './img/SasaCrno.png'
import Kosta from './img/KostaCrno.png'
import Marko from './img/MarkoCrno.png'

const NasTim = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 800, min: 700 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 2,
        },
    };

    return (
        <React.Fragment>
            <div className="nas-team" id="team">
                <h1 className="nas-tim-naslov">
                    UPOZNAJTE
                    <br />
                    <span className="nas-tim-span">NAŠ TIM</span>
                </h1>
                <div className="sliderTeam">
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={1500}
                        infinite={true}
                        showDots={false}
                        arrows={false}
                        itemClass="carousel-item-padding-20-px"
                    >
                        <div className="cardTeam">
                            <img
                                src={Marija}
                                alt=""
                                className="slika-osobe"
                            />
                            <div className="sadrzaj">
                                <div className="imePrezime">
                                    <h2>Marija Radovanović</h2>
                                    <h3>Koordinator projekta</h3>
                                </div>
                                <div className="dugmiciMreze">
                                    <NavLink to="https://www.linkedin.com/in/mradovanovic">
                                        <img
                                            src={LinkedIn}
                                            alt=""
                                            className="linkedin-image"
                                        />
                                    </NavLink>
                                    <NavLink to="marija.radovanovic@fonis.rs">
                                        <img
                                            src={Email}
                                            alt=""
                                            className="email-image"
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="cardTeam">
                            <img
                                src={Milica}
                                alt=""
                            />
                            <div className="sadrzaj">
                                <div className="imePrezime">
                                    <h2>Milica Bačić</h2>
                                    <h3>Koordinator PR tima</h3>
                                </div>
                                <div className="dugmiciMreze">
                                    <NavLink to="https://www.linkedin.com/mwlite/in/milica-bacic-1264a71a3">
                                        <img
                                            src={LinkedIn}
                                            alt=""
                                            className="linkedin-image"
                                        />
                                    </NavLink>
                                    <NavLink to="milica.bacic@fonis.rs">
                                        <img
                                            src={Email}
                                            alt=""
                                            className="email-image"
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="cardTeam">
                            <img
                                src={Jana}
                                alt=""
                            />
                            <div className="sadrzaj">
                                <div className="imePrezime">
                                    <h2>Jana Veličković</h2>
                                    <h3>Koordinator Dizajn tima</h3>
                                </div>
                                <div className="dugmiciMreze">
                                    <NavLink to="https://www.linkedin.com">
                                        <img
                                            src={LinkedIn}
                                            alt=""
                                            className="linkedin-image"
                                        />
                                    </NavLink>
                                    <NavLink to="jana.velickovic@fonis.rs">
                                        <img
                                            src={Email}
                                            alt=""
                                            className="email-image"
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="cardTeam">
                            <img
                                src={Tijana}
                                alt=""
                            />
                            <div className="sadrzaj">
                                <div className="imePrezime">
                                    <h2>Tijana Čizmić</h2>
                                    <h3>Koordinator HR tima</h3>
                                </div>
                                <div className="dugmiciMreze">
                                    <NavLink to="https://www.linkedin.com">
                                        <img
                                            src={LinkedIn}
                                            alt=""
                                            className="linkedin-image"
                                        />
                                    </NavLink>
                                    <NavLink to="tijana.cizmic@fonis.rs">
                                        <img
                                            src={Email}
                                            alt=""
                                            className="email-image"
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="cardTeam">
                            <img
                                src={Nastasja}
                                alt=""
                            />
                            <div className="sadrzaj">
                                <div className="imePrezime">
                                    <h2>Nastasja Baković</h2>
                                    <h3>Koordinator AR tima</h3>
                                </div>
                                <div className="dugmiciMreze">
                                    <NavLink to="https://www.linkedin.com/in/nastasja-bakovic">
                                        <img
                                            src={LinkedIn}
                                            alt=""
                                            className="linkedin-image"
                                        />
                                    </NavLink>
                                    <NavLink to="nastasja.bakovic@fonis.rs">
                                        <img
                                            src={Email}
                                            alt=""
                                            className="email-image"
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="cardTeam">
                            <img
                                src={Sasa}
                                alt=""
                            />
                            <div className="sadrzaj">
                                <div className="imePrezime">
                                    <h2>Saša Jevremović</h2>
                                    <h3>Koordinator CR tima</h3>
                                </div>
                                <div className="dugmiciMreze">
                                    <NavLink to="https://www.linkedin.com/in/sa%C5%A1a-jevremovi%C4%87-5b927715b/">
                                        <img
                                            src={LinkedIn}
                                            alt=""
                                            className="linkedin-image"
                                        />
                                    </NavLink>
                                    <NavLink to="sasa.jevremovic@fonis.rs">
                                        <img
                                            src={Email}
                                            alt=""
                                            className="email-image"
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="cardTeam">
                            <img
                                src={Kosta}
                                alt=""
                            />
                            <div className="sadrzaj">
                                <div className="imePrezime">
                                    <h2>Kosta Aćimović</h2>
                                    <h3>Koordinator Logistike</h3>
                                </div>
                                <div className="dugmiciMreze">
                                    <NavLink to="https://www.linkedin.com/in/kosta-aćimović-5277b3207">
                                        <img
                                            src={LinkedIn}
                                            alt=""
                                            className="linkedin-image"
                                        />
                                    </NavLink>
                                    <NavLink to="kosta.acimovic@fonis.rs">
                                        <img
                                            src={Email}
                                            alt=""
                                            className="email-image"
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="cardTeam">
                            <img
                                src={Marko}
                                alt=""
                            />
                            <div className="sadrzaj">
                                <div className="imePrezime">
                                    <h2>Marko Nikolić</h2>
                                    <h3>Koordinator IT tima</h3>
                                </div>
                                <div className="dugmiciMreze">
                                    <NavLink to="https://www.linkedin.com/in/marko-nikolic-8a1209177/">
                                        <img
                                            src={LinkedIn}
                                            alt=""
                                            className="linkedin-image"
                                        />
                                    </NavLink>
                                    <NavLink to="marko.nikolic@fonis.rs">
                                        <img
                                            src={Email}
                                            alt=""
                                            className="email-image"
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                    ;
                </div>
            </div>
        </React.Fragment>
    );
};

export default NasTim;
