import React from 'react'
import classes from './ForumKategorije.module.css'
import { NavLink } from 'react-router-dom'
import Kartica from './Kartica/Kartica'

const ForumKategorije = () => {
  return (
    <div className={classes.ForumKategorije}>
      <Kartica
        link="ohakatonu"
        paragraph="Sve sto vas zanima o hakatonu mozete naci ovde."
        heading="O hakatonu"
        color="#12A89D"
      />

      <Kartica
        link="prijava"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        heading="Prijava za takmicenje"
        color="#F7941D"
      />

      <Kartica
        link="Selekcija"
        paragraph="Sve sto vas zanima o nacinu biranja timova za hakaton mozes pitati ovde."
        heading="Selekcija"
        color="#12A89D"
      />

      <Kartica
        link="ostalo"
        paragraph="Sve što ne spada ni u jednu drugu kategoriju. Ako ne znate gde,
        postavite vašu temu ovde."
        heading="Ostalo"
        color="#FFFF00"
      />
    </div>
  )
}

export default ForumKategorije
