import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { HiArrowUp } from 'react-icons/hi'

const ScrollButton = () => {

  const [visible, setVisible] = useState(false);


  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      {
        visible
        &&
        <button onClick={() => scroll.scrollToTop()} className="scroll">
          {/* <i className="bi bi-arrow-up scroll__icon"></i> */}
          <HiArrowUp size={30} />
        </button>
      }
    </>
  )
}

export default ScrollButton
