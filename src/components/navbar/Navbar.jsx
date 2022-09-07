import React, { useEffect, useState } from 'react'
import img from '../../images/logo-light-2.png'
import img2 from '../../images/logo-dark-2.png'
import { Link } from 'react-scroll'
import { RiMenu3Line } from 'react-icons/ri'
import classNames from "classnames";

const Navbar = ({ isOpen }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  const menuClassName = classNames({
    "scroll-menu": state,
  });

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setState(true);
    } else {
      setState(false);
    }
  }

  return (
    <div className={`navbar ${state ? 'whiteBg' : 'transparent'}`}>
      <div className="navbar__content">
        <div className="navbar__left ">
          <img src={state ? img2 : img} alt="logo" />
        </div>

        <ul className="navbar__right">
          <li>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li>
            <a href="s">Showcases</a>
          </li>
          <li>
            <a href="s">Portfolio</a>
          </li>
          <li>
            <a href="s">Contact</a>
          </li>
          <li>
            <RiMenu3Line className={menuClassName} size={30} onClick={() => isOpen()} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
