import React, { useState, useEffect } from 'react'
import classes from './Pravila.module.css'
import Header from '../../../Header'
import LoginModal from '../../LoginModal/LoginModal'
import PitanjaPojedinacna from './PitanjaPojedinacna/PitanjaPojedinacna'

const Pravila = () => {
  const [postovi, setPostovi] = useState([])
  const [showLogin, setShowLogin] = useState(false)

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
    getPosts('Pravila', null)
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
          {listaPostova}
        </div>
      </div>
      <LoginModal show={showLogin} modalClosed={closeLoginHandler} />
    </React.Fragment>
  )
}
export default Pravila
