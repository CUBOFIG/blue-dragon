import React from "react";
import classNames from "classnames";
import { Link } from "react-scroll";

const SideBar = ({ toggle, isOpen }) => {
  const linkClasses = classNames("sidebar__format", {
    "sidebar__is-open": toggle,
  });

  const overlayClass = classNames("sidebar__overlay", {
    "sidebar__is-open-overlay": toggle,
  });

  return (
    <div className="sidebar">
      <div className={linkClasses}>
        <div className="sidebar-container">
          <ul>
            <li>
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => (toggle ? isOpen() : null)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => (toggle ? isOpen() : null)}
              >
                Showcases
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => (toggle ? isOpen() : null)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => (toggle ? isOpen() : null)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
      {toggle ? (
        <div
          className={overlayClass}
          onClick={() => (toggle ? isOpen() : null)}
        />
      ) : null}
    </div>
  );
};

export default SideBar;
