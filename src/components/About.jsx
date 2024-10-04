import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import AboutImage from '../assets/images/about_1.jpg'

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-text">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quis aut cumque, quasi unde voluptas necessitatibus mollitia itaque perspiciatis, repudiandae soluta praesentium eius maiores officiis. Exercitationem consectetur quae alias minus.</p>
          <div className="tick-section">
            {/* <span><FontAwesomeIcon f icon={faCheck}  /></span><p>Lorem, ipsum dolor sit amet consectetur
              .</p> */}
            <p>Lorem, ipsum dolor sit amet consectetur
              .</p>
            <p>Lorem, ipsum dolor sit amet consectetur
              .</p>
          </div>
          <div className="about-stats-numbers">
            <p>4,000+</p>
            <p>49</p>
            <p>12</p>
          </div>
          <div className="about-stats-staff">
            <p>Students</p>
            <p>Teachers</p>
            <p>Award</p>
          </div>
          <div className="about-buttons">
            <button>admission</button>
            <button id='learn-more'>learn more</button>
          </div>
        </div>

        <div className="about-image">
          <img src={AboutImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
