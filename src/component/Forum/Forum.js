import React from 'react'
import Header from '../Header'
import ForumNavigacija from './ForumNavigacija/ForumNavigacija'
import classes from './Forum.module.css'
import ForumKategorije from './ForumKategorije/ForumKategorije'
import ForumLatest from './ForumLatest/ForumLatest'
import { StickyContainer, Sticky } from 'react-sticky'
import SticklyCircle from './StickyCircle/SticklyCircle'

const Forum = () => {
  const styleTopic = {
    height: '4rem',
    width: '4rem',
    backgroundColor: '#18bc9c',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '85%',
    left: '92%',
    boxShadow: '0 4px 8px #ccc',
    border: 'none',
    ':active': {
      color: 'red',
    },
  }
  return (
    <React.Fragment>
      <StickyContainer>
        <Header />
        <div className={classes.Background}>
          <div className={classes.Forum}>
            <ForumNavigacija />
            <div className={classes.ForumCentar}>
              <ForumKategorije />
              <ForumLatest />
            </div>
          </div>
        </div>
        <SticklyCircle />
        {/* <Sticky>
          {({ style }) => (
            <button style={{ ...style, ...styleTopic }}>
              <i className="fas fa-plus"></i>
            </button>
          )}
        </Sticky> */}
      </StickyContainer>
    </React.Fragment>
  )
}

export default Forum
