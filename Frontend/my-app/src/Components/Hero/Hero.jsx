import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>  OPTIMIZATION MADE EASY</h2>
        <div>
        <div className='hero-hand-icon'>
            <p>New</p>
            <img src={hand_icon} alt="" />
        </div>
        <p>Horizons in</p>
        <p>Logistics!!</p>
      </div>
      <div className="hero-latest-button">
        <div>Shop here</div>
        <img src={arrow_icon} alt="" />
      </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero