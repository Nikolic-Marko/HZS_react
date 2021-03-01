import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import classes from './LoginModal.module.css'
import * as actionCreators from '../../../store/actions/actions'

const LoginModal = (props) => {
  const [shouldLogin, setShouldLogin] = useState(true)
  const [buttonText, setButtonText] = useState('Register')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [datum, setDatum] = useState('')

  // const registerForm = () => {
  //   console.log('radi')
  //   setShouldLogin(!shouldLogin)
  //   buttonText === 'Register'
  //     ? setButtonText('Login')
  //     : setButtonText('Register')
  // }

  const passInput = useRef()
  const passRegister = useRef()

  const loginUser = async (username, password) => {
    const form = new FormData()
    form.append('username', username)
    form.append('password', password)

    const request = new Request(
      'https://hzs.fonis.rs/2021/api/login_user.php',
      {
        method: 'POST',
        body: form,
      },
    )

    const response = await fetch(request)
    const json_data = await response.json()

    return json_data
  }

  const loginForm = () => {
    setUsername('')
    setShouldLogin(!shouldLogin)
    buttonText === 'Register'
      ? setButtonText('Login')
      : setButtonText('Register')
  }

  const submitLogin = (e) => {
    e.preventDefault()
    props.onLogin(username)

    loginUser(username, passInput.current.value)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
      })
    console.log(props.usrName)
  }

  const submitRegister = (e) => {
    e.preventDefault()
    registerUser(username, passRegister.current.value, datum, email)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
      })
  }

  const registerUser = async (username, password, datum_rodjenja, email) => {
    const form = new FormData()
    form.append('username', username)
    form.append('password', password)
    form.append('datum_rodjenja', datum_rodjenja)
    form.append('email', email)

    const url = 'https://hzs.fonis.rs/2021/api/register_user.php'
    const request = new Request(url, {
      method: 'POST',
      body: form,
    })

    const response = await fetch(request)
    const json_data = await response.json()

    return json_data
  }

  // datum rodjenja mora biti u formatu YYYY-MM-DD
  // registerUser('peraaaa', 'peraperic', '2001-05-28', 'peraperic@gmail.com')
  //   .then((data) => {
  //     console.log(data)
  //   })
  //   .catch((err) => {
  //     console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
  //   })

  return (
    <React.Fragment>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {shouldLogin ? (
          <div className={classes.Content}>
            <form
              action="/submit"
              method="get"
              style={{ height: '60%' }}
              // onSubmit={handleSubmit}
            >
              <span className={classes.Icon} onClick={props.modalClosed}>
                <i class="fas fa-times"></i>
              </span>
              <div className={classes.Inputi}>
                <input
                  id="usernameInput"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  required
                  spellcheck="false"
                  className={classes.Input1}
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                ></input>
                <input
                  type="password"
                  placeholder="password"
                  ref={passInput}
                  required
                  className={classes.Input2}
                  // value={category}
                  // onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>
              <div className={classes.Submit}>
                <div className={classes.SubmitButtons}>
                  <button
                    type="submit"
                    className={classes.btnFinish}
                    onClick={submitLogin}
                  >
                    <i class="fas fa-check" style={{ color: 'white' }}></i>
                    <span>Submit</span>
                  </button>
                  <a
                    type="submit"
                    className={classes.btnDynamic}
                    onClick={loginForm}
                  >
                    <i className="fas fa-plus" style={{ color: 'white' }}></i>
                    <span>{buttonText}</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className={classes.Content}>
            <form
              action="/submit"
              method="get"
              style={{ height: '60%' }}
              // onSubmit={handleSubmit}
            >
              <span className={classes.Icon} onClick={props.modalClosed}>
                <i class="fas fa-times"></i>
              </span>
              <div className={classes.Inputi}>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  required
                  spellcheck="false"
                  className={classes.Input2}
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                ></input>
                <input
                  type="email"
                  placeholder="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  spellcheck="false"
                  className={classes.Input1}
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                ></input>
                <input
                  type="password"
                  ref={passRegister}
                  placeholder="password"
                  required
                  className={classes.Input2}
                  // value={category}
                  // onChange={(e) => setCategory(e.target.value)}
                ></input>
                <input
                  type="password"
                  placeholder="password"
                  required
                  className={classes.Input1}
                  // value={category}
                  // onChange={(e) => setCategory(e.target.value)}
                ></input>
                <input
                  type="date"
                  value={datum}
                  onChange={(e) => setDatum(e.target.value)}
                  required
                  min="1997-01-01"
                  className={classes.Input2}
                  max="2007-12-31"
                ></input>
              </div>
              <div className={classes.Submit}>
                <div className={classes.SubmitButtons}>
                  <button
                    type="submit"
                    className={classes.btnFinish}
                    onClick={submitRegister}
                  >
                    <i class="fas fa-check" style={{ color: 'white' }}></i>
                    <span>Submit</span>
                  </button>
                  <a className={classes.btnDynamic} onClick={loginForm}>
                    <i className="fas fa-plus" style={{ color: 'white' }}></i>
                    <span>{buttonText}</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username) => dispatch(actionCreators.login(username)),
  }
}

const mapStateToProps = (state) => {
  return {
    usrName: state.username,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
