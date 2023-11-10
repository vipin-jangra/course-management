import React from 'react'

import { Button } from '../Navbar/Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1> COURSE MANAGEMENT</h1>
            <p>WHAT ARE YOU WAITING FOR?</p>
            <div className="hero-btns">
                <Button className='btns'
                 buttonStyle='btn--outline'
                  buttonSize='btn--large' >
                      GET STARTED
                  </Button>

                  <Button className='btns'
                 buttonStyle='btn--primary'
                  buttonSize='btn--large' >
                      WATCH TRAILER <i className ='far fa-play-circle' />
                  </Button>


            </div>
        </div>
    )
}
export default HeroSection