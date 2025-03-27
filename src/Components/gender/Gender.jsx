import React from 'react'
import style from './Gender.module.css'
import {Link} from 'react-router-dom'
import gender1 from './gen1.jpeg'
import gender2 from './gen2.jpg'
import gender3 from './gen3.webp'

const Gender = () => {
  return (
    <div className={style.gender}>
      <Link to={'/men'}>
      <div className={style.gen}>
        <img src={gender1} alt="" />
        <p>Watches For Men</p>
      </div>
      
      </Link>

      <Link to={'/women'}>
      <div className={style.gen}>
        <img src={gender2} alt="" />
        <p>Watches For Women</p>
      </div>
      </Link>
      
      <Link to={'/kids'}>
      <div className={style.gen}>
        <img src={gender3} alt="" />
        <p>Watches For Kids</p>
      </div>
      </Link>

    </div>
  )
}

export default Gender