import React from 'react'
import './Landing.css'
import LinkedIn from './img/linkedin.png'
import Facebook from './img/facebook.png'
import Instagram from './img/instagram.png'
import HzsSporedni from './img/hzs-sporedni-mali-removebg-preview.png'
import PlanineObojene from './img/planineobojene.png'

const Landing = () => {
  return (
    <div className="homepage">
      <div className="clouds"></div>

      <div className="text-obavestenje">
        <p>
          Zbog bezbednosti i zdravlja takmičara i <br />
          organizacionog tima{' '}
          <b>
            Hakaton za srednjoškolce
            <br /> 2021 </b>
          biće održan u periodu od 2. do 3. aprila <br />
          2021. u potpunosti onlajn. Prezentacijama
          <br />
          rešenja i svečanom zatvaranju možete pristupiti
          <br />
          putem linka u nedelju 03.04. u 19 časova.
        </p>
        <div className="dugme-ucestvuj">
          <b>UČESTVUJ</b>
        </div>

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
        />{' '}
      </div>
    </div>
  )
}

export default Landing
