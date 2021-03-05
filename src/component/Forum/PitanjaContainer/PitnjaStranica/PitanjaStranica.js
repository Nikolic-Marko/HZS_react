import React, { useState, useEffect } from 'react'
import Header from '../../../Header'
import ReplyModal from './ReplyModal/ReplyModal'
import PitanjeDiv from './PitanjeDiv/PitanjeDiv'
import Dugme from '../../Dugme/Dugme'
import classes from './PitanjaStranica.module.css'
import LoginModal from '../../LoginModal/LoginModal'
import Spinner from '../../Spinner/Spinner'
import Footer from './../../../Footer'

const PitanjaStranica = () => {
  const [showModal, setShowModal] = useState(false)
  const [post, setPost] = useState([])
  const [id, setId] = useState('')
  const [showLogin, setShowLogin] = useState(false)

  const showLoginHandler = () => {
    setShowLogin(true)
  }

  const closeLoginHandler = () => {
    setShowLogin(false)
  }

  const reply = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const url = window.location.href
    console.log(url)
    const lastItem = url.substring(url.lastIndexOf('/') + 1)
    console.log(lastItem)
    setId(lastItem)
    getPosts(null, lastItem)
      .then((data) => {
        console.log(data)

        setPost(data)
      })
      .catch((err) => {
        console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
      })
    // insertKomentar('nikola', 28, 'cetvrti komentar na novom postu')
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log('Greska: ' + err)
    //   })
  }, [])

  let listaKomentara

  if (post[0] !== undefined) {
    listaKomentara = post[0].komentari.map((komentar) => {
      return (
        <PitanjeDiv
          key={komentar.id}
          name={komentar.autor}
          day={komentar.datum_kreiranja}
          text={komentar.text}
          click={reply}
        />
      )
    })
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
  let postAutor
  let postTekst
  let postTitle
  if (post[0] !== undefined) {
    postTitle = post[0].naslov
    postAutor = post[0].autor
    postTekst = post[0].text
  }

  return (
    <React.Fragment>
      <Header modalShow={showLoginHandler} />
      <div className={classes.Container}>
        <div className={classes.TitleDiv}>
          <h2 className={classes.Title}>{postTitle}</h2>
        </div>
        <PitanjeDiv name={postAutor} text={postTekst} click={reply} />
        {/* <PitanjeDiv
          name="marko754"
          day="9d"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          click={reply}
        />
        <PitanjeDiv
          name="frenki"
          day="5d"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          click={reply}
        />
        <PitanjeDiv
          name="mirko"
          day="2d"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          click={reply}
        />
        <PitanjeDiv
          name="zorica"
          day="8d"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          click={reply} 
        /> */}
        {post.length > 0 ? listaKomentara : <Spinner />}
      </div>
      <Dugme ikonica="fas fa-reply" click={reply} />
      <ReplyModal show={showModal} modalClosed={closeModal} id={id} />
      <LoginModal show={showLogin} modalClosed={closeLoginHandler} />
      <Footer />
    </React.Fragment>
  )
}

export default PitanjaStranica
