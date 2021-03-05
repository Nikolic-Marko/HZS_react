import React, { useEffect, useState } from 'react'
import classes from './ForumLatest.module.css'
import Pitanja from './Pitanja/Pitanja.js'
import moment from 'moment'
import Spinner from '../Spinner/Spinner'

const ForumLatest = () => {
  const [postovi, setPostovi] = useState([])
  const [visible, setVisible] = useState(10)
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
    getPosts()
      .then((data) => {
        setPostovi(data)
      })
      .catch((err) => {
        console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
      })
  }, [])

  const handleLoadMore = () => {
    setVisible(visible + 10)
  }

  const listaPostova = postovi.slice(0, visible).map((post) => {
    return (
      <Pitanja
        key={post.id}
        title={post.naslov}
        category={post.kategorija}
        replies={post.komentari.length}
        id={post.id}
        datum={moment(`${post.datum_kreiranja}`).fromNow()}
      />
    )
  })

  let disable = false

  if (visible >= postovi.length) {
    disable = true
  }

  return (
    <div className={classes.Container}>
      {postovi.length > 0 ? (
        <React.Fragment>
          <p className={classes.Title}>Poslednje aktivnosti</p>
          <div className={classes.ForumPitanja}>
            {/* <Pitanja logo username="mare" naslov="aii" kategorija="oii" />
      <Pitanja logo username="mare" naslov="aii" kategorija="oii" />
      <Pitanja logo username="mare" naslov="aii" kategorija="oii" />
      <Pitanja logo username="mare" naslov="aii" kategorija="oii" />
      <Pitanja logo username="mare" naslov="aii" kategorija="oii" />
    <Pitanja logo username="mare" naslov="aii" kategorija="oii" /> */}
            {listaPostova}
            <div className={classes.ButtonRight}>
              <button
                disabled={disable}
                className={disable ? classes.Disabled : classes.LoadMore}
                onClick={handleLoadMore}
              >
                Load more
              </button>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default ForumLatest
