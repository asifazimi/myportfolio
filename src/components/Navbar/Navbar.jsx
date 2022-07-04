import React, { useState } from "react";
import "./Navbar.scss";
import { links } from "../../data";
import { HiMenuAlt4, HiX } from "react-icons/hi";
// Import Images
import { images } from "../../constants";

const Navbar = () => {
  // states
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id} className="app__flex p-text">
              <div />
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <div>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id} className="">
                    <a href={url} onClick={() => setToggle(false)}>
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
