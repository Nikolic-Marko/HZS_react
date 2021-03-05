import React, { useEffect, useState } from 'react'
import classes from './ForumKategorije.module.css'
import Kartica from './Kartica/Kartica'

const ForumKategorije = () => {
  const [numberOfPosts, setNumberOfPosts] = useState([])

  const getPosts = async (kategorija, id) => {
    let url

    if (id) {
      url = 'https://hzs.fonis.rs/2021/api/read_posts.php?id=' + id
    } else {
      kategorija
        ? (url =
            'https://hzs.fonis.rs/2021/api/read_posts.php?kategorija=' +
            kategorija)
        : (url = 'https://hzs.fonis.rs/2021/api/read_posts.php')
    }

    const request = new Request(url, {
      method: 'GET',
    })

    const response = await fetch(request)
    const json_data = await response.json()

    return json_data
  }
  let result
  useEffect(() => {
    getPosts()
      .then((data) => {
        result = Object.values(
          data.reduce((a, { kategorija }) => {
            let key = `${kategorija}`
            a[key] = a[key] || { kategorija, count: 0 }
            a[key].count++
            return a
          }, {}),
        )
        setNumberOfPosts(result)
      })
      .catch((err) => {
        console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
      })
  }, [])

  let numberRad
  let numberDom
  let numberPrez
  let numberPrav
  let numberOst
  if (numberOfPosts[0] !== undefined) {
    for (let i = 0; i < numberOfPosts.length; i++) {
      if (numberOfPosts[i].kategorija === 'Radionice') {
        numberRad = numberOfPosts[i].count
      } else if (numberOfPosts[i].kategorija === 'Prezentovanje rešenja') {
        numberPrez = numberOfPosts[i].count
      } else if (numberOfPosts[i].kategorija === 'Domaći zadatak') {
        numberDom = numberOfPosts[i].count
      } else if (numberOfPosts[i].kategorija === 'Pravila') {
        numberPrav = numberOfPosts[i].count
      } else if (numberOfPosts[i].kategorija === 'Ostalo') {
        numberOst = numberOfPosts[i].count
      }
    }
  }

  return (
    <React.Fragment>
      {
        <div className={classes.ForumKategorije}>
          <p className={classes.Title}>Kategorije</p>
          <Kartica
            link="Radionice"
            paragraph="Želiš da unaprediš svoje IT znanje i time omogućiš sebi bolji plasman na hakatonu? Za tebe smo spremili radionice koje će ti u tome pomoći! Sve što te zanima o radionicama nas možeš ovde pitati."
            heading="Radionice"
            color="#12A89D"
            broj={numberRad}
          />

          <Kartica
            link="DomaciZadatak"
            paragraph="Svoje znanje sa radionica primenićeš na realnom primeru, ali ćeš i pokazati zašto baš tvoj tim zaslužuje da uđe u najuži krug i time bude korak bliže pobedi. Dileme u vezi sa domaćim zadacima ćemo rešiti u ovoj sekciji."
            heading="Domaći zadatak"
            color="#F7941D"
            broj={numberDom}
          />

          <Kartica
            link="PrezentovanjeResenja"
            paragraph="Odeljak Prezentovanje rešenja predstavlja kutak u kome možete prodiskutovati o svemu što vas interesuje, a vezano je za vaš nastup pred žirijem. Rešenja ne smete otkrivati unapred, ali stojimo vam na raspolaganju za sve tehničke nedoumice koje imate."
            heading="Prezentovanje rešenja  "
            color="#3AB54A"
            broj={numberPrez}
          />

          <Kartica
            link="Pravila"
            paragraph="Nisi siguran kako funkcioniše projekat? Imaš nedoumice u vezi sa pravilima? Ovo je pravo mesto da postaviš svoje pitanje, a mi ćemo se potruditi da ti razjasnimo sve što te buni u najkraćem roku!"
            heading="Pravila"
            color="#FFFF00"
            broj={numberPrav}
          />
          <Kartica
            link="Ostalo"
            paragraph="Imaš još neku nedoumicu koja se tiče HZS-a koju bi želeo da rastumačiš? Mi smo tu da ti damo odgovor!"
            heading="Ostalo"
            color="#AB9364"
            broj={numberOst}
          />
        </div>
      }
    </React.Fragment>
  )
}

export default ForumKategorije
