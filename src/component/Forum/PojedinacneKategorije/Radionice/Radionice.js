import React, { useEffect, useState } from 'react'
import classes from './Radionice.module.css'
import PitanjaPojedinacna from './PitanjaPojedinacna/PitanjaPojedinacna'

const Radionice = () => {
  const [postovi, setPostovi] = useState([])
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

  useEffect(() => {
    getPosts('Radionice', null)
      .then((data) => {
        console.log(data)

        setPostovi(data)

        console.log(postovi)
      })
      .catch((err) => {
        console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
      })
  }, [])

  const listaPostova = postovi.map((post) => {
    return (
      <PitanjaPojedinacna
        title={post.naslov}
        text={post.text}
        komentari={post.komentari}
        id={post.id}
        autor={post.autor}
        datum={post.datum_kreiranja}
      />
    )
  })

  // getPosts()
  //   .then((data) => {
  //     console.log(data)
  //   })
  //   .catch((err) => {
  //     console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
  //   })

  return (
    <div className={classes.Radionice}>
      <div className={classes.PitanjaContainer}>
        <div className={classes.PitanjaHeader}>
          <div className={classes.Left}>
            <p>Topic</p>
          </div>
          <div className={classes.Right}>
            <p>Activity</p>
            <p>Replies</p>
          </div>
        </div>
        {listaPostova}
      </div>
    </div>
  )
}

export default Radionice
