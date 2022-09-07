import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ heading, link1, link2, direction, selection }) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__content-h1">{heading}</h1>
        {
          selection
            ? (
              <div className="header__content-links">
                <a href={direction}>{link1}</a>
                <span className="header__content-span"></span>
                <a href={direction}>{link2}</a>
              </div>
            )
            : (
              <div className="header__content-links">
                <Link to={direction}>{link1}</Link>
                < span className="header__content-span"></span>
                <Link to={direction}>{link2}</Link>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Header
