import React, { useState, useEffect } from 'react'
import Header from '../../../Header'
import ReplyModal from './ReplyModal/ReplyModal'
import PitanjeDiv from './PitanjeDiv/PitanjeDiv'
import Dugme from '../../Dugme/Dugme'
import classes from './PitanjaStranica.module.css'

const PitanjaStranica = () => {
  const [showModal, setShowModal] = useState(false)
  const [post, setPost] = useState([])

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
          name={komentar.autor}
          day={komentar.datum_kreiranja}
          text={komentar.text}
          click={reply}
        />
      )
    })
  }

  const insertKomentar = async (autor, post_id, text) => {
    const form = new FormData()
    form.append('post_id', post_id)
    form.append('text', text)
    form.append('autor', autor)

    const url = 'https://hzs.fonis.rs/2021/api/insert_komentar.php'
    const request = new Request(url, {
      method: 'POST',
      body: form,
    })

    const response = await fetch(request)
    const json_data = await response.json()

    return json_data
  }

  // insertKomentar("marko", 8, "prvi komentar na novom postu").then(data => {
  //     console.log(data);
  // }).catch(err => {
  //     console.log("Greska: " + err);
  // })

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

  return (
    <React.Fragment>
      <Header />
      <div className={classes.Container}>
        <div className={classes.TitleDiv}>
          <h2 className={classes.Title}></h2>
        </div>
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
        {listaKomentara}
      </div>
      <Dugme ikonica="fas fa-reply" click={reply} />
      <ReplyModal show={showModal} modalClosed={closeModal} />
    </React.Fragment>
  )
}

export default PitanjaStranica
