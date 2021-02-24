import React from 'react';
import '../css/Footer.css';
import logoFonis from '../assets/FONISlogo.png'

function Footer() {
  return (
    <div className="footer"> 
      <div className="logoSection">
        <img src={logoFonis} alt="Logo Fonis"/>
      </div>
      <div className="locationSection">
        <h1>GDE SE NALAZIMO ?</h1>
        <p>Fakultet organizacionih nauka</p>
        <p>Jove Ilića 154</p>
        <p>Beograd</p>
      </div>
      <div className="contactSection">
        <h1>KONTAKTIRAJTE NAS</h1>
        <p>office@fonis.rs</p>
      </div>
    </div>
  );
}
export default Footer;

