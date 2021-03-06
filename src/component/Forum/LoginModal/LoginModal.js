import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import classes from './LoginModal.module.css'
import * as actionCreators from '../../../store/actions/actions'

const LoginModal = (props) => {
  const [shouldLogin, setShouldLogin] = useState(true)
  const [buttonText, setButtonText] = useState('Register')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [datum, setDatum] = useState('')
  const [user, setUser] = useState()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // const registerForm = () => {
  //   setShouldLogin(!shouldLogin)
  //   buttonText === 'Register'
  //     ? setButtonText('Login')
  //     : setButtonText('Register')
  // }

  const passInput = useRef()
  const passRegister = useRef()

  const testEmail = (mail) => {
    const expression = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

    return expression.test(String(email).toLowerCase())
  }

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

  useEffect(() => {
    const loggedInUsername = localStorage.getItem('username')
    const loggedInPass = localStorage.getItem('pass')
    if (loggedInPass && loggedInUsername) {
      props.onLogin()
    }
  }, [])

  const loginForm = () => {
    setErrorMessage('')
    setError(false)
    setUsername('')
    setShouldLogin(!shouldLogin)
    buttonText === 'Register'
      ? setButtonText('Login')
      : setButtonText('Register')
  }

  const submitLogin = (e) => {
    if (username !== '' && passInput !== '') {
      e.preventDefault()
      let status = ''
      loginUser(username, passInput.current.value)
        .then((data) => {
          setError(false)
          status = data.status
          if (status === 'uspesno') {
            props.onLogin(username)
            props.modalClosed()
            setUser(username, passInput)
            localStorage.setItem('username', username)
            localStorage.setItem('pass', passInput)
          } else {
            setError(true)

            setErrorMessage('Pogresno korisnicko ime ili lozinka.')
          }
        })
        .catch((err) => {
          console.log(
            'Greska prilikom izvrsavanja http zahteva kod logina: ' + err,
          )
          setError(true)
          setErrorMessage('Greska prilikom izvrsavanja http zahteva kod logina')
        })
    } else {
      setError(true)
      setErrorMessage('Unesite sifru.')
    }
  }

  const submitRegister = async (e) => {
    e.preventDefault()
    let status = ''

    if (datum === '') {
      setErrorMessage('Unesite datum.')
      setError(true)
      return
    }

    if (!testEmail(email)) {
      setError(true)
      setErrorMessage('Email je u pogresnom formatu.')
      return
    }

    if (password === confirmPassword && password !== '' && username !== '') {
      props.modalClosed()

      await registerUser(username, passRegister.current.value, datum, email)
        .then((data) => {})
        .catch((err) => {
          setError(true)
          setErrorMessage('Greska prilikom izvrsavanja http zahteva')
        })
      await loginUser(username, password)
        .then((data) => {
          setError(false)
          status = data.status
          if (status === 'uspesno') {
            props.onLogin(username)
            props.modalClosed()
            setUser(username, passInput)
            localStorage.setItem('username', username)
            localStorage.setItem('pass', passInput)
          } else {
            setError(true)
            setErrorMessage('Greska prilikom logina.')
          }
        })
        .catch((err) => {
          setError(true)
          setErrorMessage('Greska prilikom izvrsavanja http zahteva kod logina')
        })
    } else {
      setError(true)
      setErrorMessage('Sifre se ne slazu.')
    }
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
              {!error || <div className={classes.Error}>{errorMessage}</div>}
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
                  <a className={classes.btnDynamic} onClick={loginForm}>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <input
                  type="password"
                  placeholder="password"
                  required
                  className={classes.Input1}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              {!error || <div className={classes.Error}>{errorMessage}</div>}
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
