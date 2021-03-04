import React, { useEffect, useState } from 'react'
import classes from './PitanjaPojedinacna.module.css'
import { Link } from 'react-router-dom'
import moment from 'moment'

const PitanjaPojedinacna = (props) => {
  const [activity, setActivity] = useState(props.datum)
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
  let datum
  useEffect(() => {
    console.log(props.id)
    getPosts(null, props.id)
      .then((data) => {
        if (data[0].komentari.slice(-1)[0] !== undefined) {
          datum = data[0].komentari.slice(-1)[0].datum
        }
        console.log(datum)
        if (datum !== undefined) {
          setActivity(datum)
        }
      })
      .catch((err) => {
        console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
      })
  }, [])

  return (
    <div className={classes.PitanjaPojedinacna}>
      <Link to={`Pravila/${props.id}`}>{props.title}</Link>
      <div className={classes.RightSide}>
        <div className={classes.Datum}>
          {moment.utc(`${activity}`).local().startOf('seconds').fromNow()}
        </div>
        <div className={classes.Replies}>{props.komentari.length}</div>
      </div>
    </div>
  )
}

export default PitanjaPojedinacna
