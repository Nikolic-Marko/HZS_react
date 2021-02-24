import React from 'react'
import classes from './ForumKategorije.module.css'
import { NavLink } from 'react-router-dom'
import Kartica from './Kartica/Kartica'

const ForumKategorije = () => {
  return (
    <div className={classes.ForumKategorije}>
      <Kartica
        link="Radionice"
        paragraph="Želiš da unaprediš svoje IT znanje i time omogućiš sebi bolji plasman na hakatonu? Za tebe smo spremili radionice koje će ti u tome pomoći! Sve što te zanima o radionicama nas možeš ovde pitati."
        heading="Radionice"
        color="#12A89D"
      />

      <Kartica
        link="Domaći zadatak"
        paragraph="Svoje znanje sa radionica primenićeš na realnom primeru, ali ćeš i pokazati zašto baš tvoj tim zaslužuje da uđe u najuži krug i time bude korak bliže pobedi. Dileme u vezi sa domaćim zadacima ćemo rešiti u ovoj sekciji."
        heading="Domaći zadatak"
        color="#F7941D"
      />

      <Kartica
        link="Prezentovanje rešenja"
        paragraph="Odeljak Prezentovanje rešenja predstavlja kutak u kome možete prodiskutovati o svemu što vas interesuje, a vezano je za vaš nastup pred žirijem. Rešenja ne smete otkrivati unapred, ali stojimo vam na raspolaganju za sve tehničke nedoumice koje imate."
        heading="Prezentovanje rešenja  "
        color="#12A89D"
      />

      <Kartica
        link="Pravila"
        paragraph="Nisi siguran kako funkcioniše projekat? Imaš nedoumice u vezi sa pravilima? Ovo je pravo mesto da postaviš svoje pitanje, a mi ćemo se potruditi da ti razjasnimo sve što te buni u najkraćem roku!"
        heading="Pravila"
        color="#FFFF00"
      />
       <Kartica
        link="Ostalo"
        paragraph="Imaš još neku nedoumicu koja se tiče HZS-a koju bi želeo da rastumačiš? Mi smo tu da ti damo odgovor!"
        heading="Ostalo"
        color="#FFFF00"
      />
    </div>
  )
}

export default ForumKategorije
