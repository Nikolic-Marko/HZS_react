import React, { useState } from 'react'

import classes from './ReplyModal.module.css'
const Modal = (props) => {
  const [text, setText] = useState('')
  const submitComment = (e) => {
    if (text !== '') {
      e.preventDefault()
      let usrName =
        localStorage.getItem('username') === null
          ? 'Guest'
          : localStorage.getItem('username')
      insertKomentar(usrName, props.id, text)
        .then((data) => {
          console.log(data)
          const status = data.status
          if (status === 'uspesno') {
            props.modalClosed()
            window.location.reload(false)
          }
        })
        .catch((err) => {
          console.log('Greska: ' + err)
        })
    }
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

  return (
    <React.Fragment>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        <div className={classes.Content}>
          <form action="/submit" method="get" style={{ height: '60%' }}>
            <span className={classes.Icon} onClick={props.modalClosed}>
              <i className="fas fa-times"></i>
            </span>

            <div className={classes.Tekst}>
              <textarea
                placeholder="Ovde upisite vas odgovor"
                className={classes.TekstArea}
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  resize: 'none',
                }}
              />
            </div>
            <div className={classes.Submit}>
              <div className={classes.SubmitButtons}>
                <button
                  type="submit"
                  className={classes.btnSubmit}
                  onClick={(e) => submitComment(e)}
                >
                  <i className="fas fa-plus" style={{ color: 'white' }}></i>
                  <span>Submit</span>
                </button>
                <a className={classes.btnCancel} onClick={props.modalClosed}>
                  Cancel
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default React.memo(Modal)
