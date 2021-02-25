import React from 'react';
import '../css/Footer.css';
import logoFonis from '../assets/FONISlogo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="logoSection">
        <a href="https://fonis.rs/">
          <img src={logoFonis} alt="Logo Fonis" />
        </a>
      </div>
      <div className="locationSection">
        <h1>GDE SE NALAZIMO ?</h1>
        <p>Fakultet organizacionih nauka</p>
        <p>Jove Ilića 154</p>
        <p>Beograd</p>
      </div>
      <div className="contactSection">
        <h1>KONTAKTIRAJTE NAS</h1>
        <a href="mailto: office@fonis.rs">
          <p>office@fonis.rs</p>
        </a>
      </div>
    </div>
  );
}
export default Footer;

