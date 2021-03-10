import React, { Suspense, useEffect, useState } from 'react'
import classes from './DinamicneKategorije.module.css'
import PitanjaPojedinacna from './PitanjaPojedinacna/PitanjaPojedinacna'
import Header from '../../Header'
import LoginModal from '../LoginModal/LoginModal'
import Spinner from '../Spinner/Spinner'
import Footer from './../../Footer'

const DinamicneKategorije = () => {
  const [postovi, setPostovi] = useState([])
  const [showLogin, setShowLogin] = useState(false)
  const [visible, setVisible] = useState(10)
  const [loading, setLoading] = useState(true)

  const showLoginHandler = () => {
    setShowLogin(true)
  }

  const closeLoginHandler = () => {
    setShowLogin(false)
  }

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
    const url = window.location.href
    const kategorija = url.substring(url.lastIndexOf('/') + 1)

    switch (kategorija) {
      case 'Radionice':
        getPosts('Radionice', null)
          .then((data) => {
            setPostovi(data)
            setLoading(false)
          })
          .catch((err) => {
            console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
          })
        break
      case 'Pravila':
        getPosts('Pravila', null)
          .then((data) => {
            setPostovi(data)
            setLoading(false)
          })
          .catch((err) => {
            console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
          })
        break
      case 'Ostalo':
        getPosts('Ostalo', null)
          .then((data) => {
            setPostovi(data)
            setLoading(false)
          })
          .catch((err) => {
            console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
          })
        break
      case 'PrezentovanjeResenja':
        getPosts('Prezentovanje rešenja', null)
          .then((data) => {
            setPostovi(data)
            setLoading(false)
          })
          .catch((err) => {
            console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
          })
        break
      case 'DomaciZadatak':
        getPosts('Domaći zadatak', null)
          .then((data) => {
            setPostovi(data)
            setLoading(false)
          })
          .catch((err) => {
            console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
          })
        break

      default:
        break
    }
  }, [])

  const handleLoadMore = () => {
    setVisible(visible + 10)
  }

  let disable = false

  if (visible >= postovi.length) {
    disable = true
  }

  const listaPostova = postovi.slice(0, visible).map((post) => {
    return (
      <PitanjaPojedinacna
        title={post.naslov}
        kategorija={post.kategorija.replace(/\s+/g, '').toLowerCase()}
        text={post.text}
        komentari={post.komentari}
        id={post.id}
        autor={post.autor}
        datum={post.datum_kreiranja}
      />
    )
  })

  return (
    <React.Fragment>
      <Header modalShow={showLoginHandler} />
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
          {loading ? (
            <Spinner />
          ) : postovi.length > 0 ? (
            listaPostova
          ) : (
            <div className={classes.NoPosts}>Jos uvek nema objava</div>
          )}
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
      </div>
      <LoginModal show={showLogin} modalClosed={closeLoginHandler} />
      <Footer />
    </React.Fragment>
  )
}

export default DinamicneKategorije
