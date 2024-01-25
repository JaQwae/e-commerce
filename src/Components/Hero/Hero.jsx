import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
    return (
        <div id="hero">
            <section id="hero-left">
                <h2>New Arrivals</h2>
                <div>
                    <div id="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt='A waving hand'/>
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div id="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="An arrow"/>
                </div>
            </section>
            <section id="hero-right">
                <img src={hero_image} alt="girl with black sunglasses, navy shirt, red purse, grey sweats, and nike shoes and socks."/>
            </section>
        </div>
    )
}

export default Hero