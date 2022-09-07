import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Portfolio = ({ subtitle, title, cards }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 10024, min: 1400 },
      items: 3
    },
    mtablet: {
      breakpoint: { max: 1400, min: 1200 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1
    }
  };

  return (
    <div className="portfolio">
      <div className="portfolio__section">
        <div className="contente">
          <div className="portfolio__flex-content">
            <div className="portfolio__content">
              <h5 className="portfolio__content-h5"> {subtitle} </h5>
              <h3 className="portfolio__content-h3"> {title} </h3>
            </div>
          </div>
          <div className='portfolio__cards-container' >
            <Carousel className='contaiaa' responsive={responsive} showDots={true} removeArrowOnDeviceType={["desktop", "mobile", "tablet", "mtablet"]}>
              {cards.map((card, index) => (
                <div className='card-c' key={index}>
                  <div className="portfolio__card">
                    <div className="portfolio__card-img">
                      <img src={card.img} alt="card" />
                    </div>
                    <h5 className="portfolio__card-name">
                      {card.name}
                    </h5>
                    <p className="portfolio__card-expert">
                      {card.expert}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio
