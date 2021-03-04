import React, { useState, useEffect } from 'react'
import classes from './MojiPostovi.module.css'
import Header from '../../Header'
import LoginModal from '../LoginModal/LoginModal'
import PitanjaPojedinacna from './PitanjaPojedinacna/PitanjaPojedinacna'
import { Redirect } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const MojiPostovi = (props) => {
  const [postovi, setPostovi] = useState([])
  const [showLogin, setShowLogin] = useState(false)
  const [visible, setVisible] = useState(10)

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

  const handleLoadMore = () => {
    setVisible(visible + 10)
  }

  let disable = false

  if (visible >= postovi.length) {
    disable = true
  }

  useEffect(() => {
    if (localStorage.getItem('username') !== null) {
      getPosts()
        .then((data) => {
          console.log(data)
          setPostovi(
            data.filter((post) =>
              post.autor.includes(localStorage.getItem('username')),
            ),
          )
          console.log(props.isAuthenticated)
        })
        .catch((err) => {
          console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
        })
    }
  }, [])

  const listaPostova = postovi.slice(0, visible).map((post) => {
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

  return (
    <React.Fragment>
      {localStorage.getItem('username') !== null ? (
        <div>
          <Header modalShow={showLoginHandler} />
          <div className={classes.Radionice}>
            {postovi.length > 0 ? (
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
            ) : (
              <Spinner />
            )}
          </div>
          <LoginModal show={showLogin} modalClosed={closeLoginHandler} />
        </div>
      ) : (
        <Redirect to="/forum" />
      )}
    </React.Fragment>
  )
}

export default MojiPostovi
