import React from 'react'
import { Element } from 'react-scroll'

const About = ({ title, description, icons }) => {
  return (
    <Element name="about" className="about">
      <div className="about-container">
        <div className="row about__information-section">
          <div>
            <h4 className="about__h4">{title}</h4>
          </div>
          <div>
            <div className="about__text">
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="about-container-cards">
          {
            icons.map((section, index) => (
              <div className='about__card' key={index}>
                <div className="about__section">
                  <div className="about__section-icon">
                    <i className={section.icon}></i>
                  </div>
                  <div className="about__section-heading">
                    <h5>
                      {section.heading}
                    </h5>
                  </div>
                  <div className="about__section-text">
                    <p>
                      {section.text}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div >
    </Element >
  )
}

export default About
