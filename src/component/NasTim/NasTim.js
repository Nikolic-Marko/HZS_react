import React from 'react'
import './NasTim.css'
import Email from '../../assets/email.png'
import LinkedIn from '../../assets/linkedin.png'
import LinkedInWhite from '../../assets/linkedinwhite.png'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const NasTim = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 700 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2
    }
  };

  return (
    <React.Fragment>
   <div className="nas-team">
   <h1 className="nas-tim-naslov">
          UPOZNAJTE
          <br />
          <span className="nas-tim-span">NAŠ TIM</span>
        </h1>
   <div className="sliderTeam">
    
   <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1500} infinite={true} showDots={false} arrows={false}
   itemClass="carousel-item-padding-20-px">
          <div className="cardTeam"><img src="https://i.ibb.co/jyy7FZb/Slika-Osobe.png" alt="" className="slika-osobe" />
          <div className="sadrzaj">
          <div className="imePrezime">
          <h2>Ime prezime</h2>
          <h3>Tim</h3>
          </div>
          <div className="dugmiciMreze">
            <img src={LinkedIn} alt="" className="linkedin-image" />
                <img src={Email} alt="" className="email-image" />
            </div>
                </div>
                </div>
          <div className="cardTeam"><img src="https://i.ibb.co/jyy7FZb/Slika-Osobe.png" alt="" />
          <div className="sadrzaj">
          <div className="imePrezime">
          <h2>Ime prezime</h2>
          <h3>Tim</h3>
          </div>
          <div className="dugmiciMreze">
            <img src={LinkedIn} alt="" className="linkedin-image" />
                <img src={Email} alt="" className="email-image" />
            </div>
                </div></div>
          <div className="cardTeam"><img src="https://i.ibb.co/jyy7FZb/Slika-Osobe.png" alt="" />
          <div className="sadrzaj">
          <div className="imePrezime">
          <h2>Ime prezime</h2>
          <h3>Tim</h3>
          </div>
          <div className="dugmiciMreze">
            <img src={LinkedIn} alt="" className="linkedin-image" />
                <img src={Email} alt="" className="email-image" />
            </div>
                </div></div>
          <div className="cardTeam"><img src="https://i.ibb.co/jyy7FZb/Slika-Osobe.png" alt="" />
          <div className="sadrzaj">
          <div className="imePrezime">
          <h2>Ime prezime</h2>
          <h3>Tim</h3>
          </div>
          <div className="dugmiciMreze">
            <img src={LinkedIn} alt="" className="linkedin-image" />
                <img src={Email} alt="" className="email-image" />
            </div>
                </div></div>
          <div className="cardTeam"><img src="https://i.ibb.co/jyy7FZb/Slika-Osobe.png" alt="" />
          <div className="sadrzaj">
          <div className="imePrezime">
          <h2>Ime prezime</h2>
          <h3>Tim</h3>
          </div>
          <div className="dugmiciMreze">
            <img src={LinkedIn} alt="" className="linkedin-image" />
                <img src={Email} alt="" className="email-image" />
            </div>
                </div></div>
          <div className="cardTeam"><img src="https://i.ibb.co/jyy7FZb/Slika-Osobe.png" alt="" />
          <div className="sadrzaj">
          <div className="imePrezime">
          <h2>Ime prezime</h2>
          <h3>Tim</h3>
          </div>
          <div className="dugmiciMreze">
            <img src={LinkedIn} alt="" className="linkedin-image" />
                <img src={Email} alt="" className="email-image" />
            </div>
                </div></div>
    </Carousel>;
      
      </div> 

      </div>
    </React.Fragment>
  )
}

export default NasTim
