import React from 'react'

import classes from './ReplyModal.module.css'
const modal = (props) => {
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

export default React.memo(modal)
