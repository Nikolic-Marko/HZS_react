import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";
import LinkedIn from "./img/linkedin.png";
import Facebook from "./img/facebook.png";
import Instagram from "./img/instagram.png";
import HzsSporedni from "./img/hzs-sporedni-mali-removebg-preview.png";
import PlanineObojene from "./img/planineobojene.png";

const Landing = () => {
    return (
        <div className="homepage">
            <div className="clouds"></div>

            <div className="text-obavestenje">
                <p>
                    I ove godine, po treći put zaredom, <br />
                    Udruženje studenata informatike FONIS <br />
                    organizuje{" "}
                    <b>
                        Hakaton za srednjoškolce!
                        <br />
                    </b>
                    Ovaj put družimo se u online formatu, <br />
                    u periodu od 2. do 3. aprila 2021.
                    <br />
                    Prijave za takmičenje su otvorene <br /> do 11. marta u
                    23:59,
                    <br />a mi vas s nestrpljenjem očekujemo!
                </p>
                <NavLink to="/prijava" style = {{textDecoration: "none"}}>
                    <div className="dugme-ucestvuj">
                        <b>UČESTVUJ</b>
                    </div>
                </NavLink>
                {/* <!-- <div className="tajmer">
          <p id="timer"></p>
  </div> --> */}

                <div className="dugmici-mreze">
                    <a href="https://www.instagram.com/hakaton_za_srednjoskolce/">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="https://web.facebook.com/fonis.rs/?_rdc=1&_rdr">
                        <img className="dugmic-drugi" src={Facebook} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/company/fonis/">
                        <img src={LinkedIn} alt="" />
                    </a>
                </div>
            </div>

            <div className="sporedni-logo">
                <div className="slogan">
                    <p>Bring it on!</p>
                    <img src={HzsSporedni} alt="" />
                </div>
            </div>
            <div className="mountain">
                <img
                    className="mountaintimg"
                    src={PlanineObojene}
                    loading="lazy"
                    alt=""
                />{" "}
            </div>
        </div>
    );
};

export default Landing;
