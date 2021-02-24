import React, { useState } from 'react'
import classes from './LoginModal.module.css'

const LoginModal = (props) => {
  const [shouldLogin, setShouldLogin] = useState(true)
  const [buttonText, setButtonText] = useState('Register')

  const registerForm = () => {
    console.log('radi')
    setShouldLogin(!shouldLogin)
    buttonText === 'Register'
      ? setButtonText('Login')
      : setButtonText('Register')
  }

  const loginForm = () => {
    setShouldLogin(!shouldLogin)
    buttonText === 'Register'
      ? setButtonText('Login')
      : setButtonText('Register')
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
                  type="text"
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
                  required
                  className={classes.Input2}
                  // value={category}
                  // onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>
              <div className={classes.Submit}>
                <div className={classes.SubmitButtons}>
                  <button type="submit" className={classes.btnFinish}>
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
                  spellcheck="false"
                  className={classes.Input1}
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                ></input>
                <input
                  type="password"
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
              </div>
              <div className={classes.Submit}>
                <div className={classes.SubmitButtons}>
                  <button type="submit" className={classes.btnFinish}>
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

export default LoginModal
