import React, { useState } from 'react'
import classes from './Modal.module.css'
import { connect } from 'react-redux'

const Modal = (props) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')

  const insertPost = async (naslov, text, autor, kategorija) => {
    const form = new FormData()
    form.append('naslov', naslov)
    form.append('text', text)
    form.append('autor', autor)
    form.append('kategorija', kategorija)

    const url = 'https://hzs.fonis.rs/2021/api/insert_post.php'
    const request = new Request(url, {
      method: 'POST',
      body: form,
    })

    const response = await fetch(request)
    const json_data = await response.json()

    return json_data
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    insertPost(title, text, props.usrName, category)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log('Greska: ' + err)
      })
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
          <form
            action="/submit"
            method="get"
            style={{ height: '60%' }}
            onSubmit={handleSubmit}
          >
            <span className={classes.Icon} onClick={props.modalClosed}>
              <i class="fas fa-times"></i>
            </span>
            <div className={classes.Inputi}>
              <input
                type="text"
                placeholder="Add Title"
                required
                className={classes.Input1}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <input
                type="text"
                required
                className={classes.Input2}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div className={classes.Tekst}>
              <textarea
                value={text}
                required
                onChange={(e) => setText(e.target.value)}
                placeholder="Ovde upisite vase pitanje"
                className={classes.TekstArea}
                style={{
                  resize: 'none',
                }}
              />
            </div>
            <div className={classes.Submit}>
              <div className={classes.SubmitButtons}>
                <button type="submit" className={classes.btnSubmit}>
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

const mapStateToProps = (state) => {
  return {
    usrName: state.username,
  }
}
export default connect(mapStateToProps)(Modal)
