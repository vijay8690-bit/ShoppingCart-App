import React from 'react'
import lovesirPic from '../assets/lovesirPic.jpeg'
import './Item.css'

const Item = () => {
  return (
    <div>
        <div className='user-container'>
        <p id='user-name'>Love Babbar</p>
        <img id='user-img' src={lovesirPic} alt='love'></img>
        <p id='user-desc'>Description of Love babbar</p>
    </div>
    </div>
    
  )
}

export default Item