import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { BsSearch, BsBell } from "react-icons/bs";
import logo from "./logo.png";
import "./Menu.css";

function Menu() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Netflix Logo" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <MdClose /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Séries
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Films
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Nouveautés
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Ma liste
            </a>
          </li>
        </ul>
        <div className="nav-icons">
          <a href="/" className="icon-link" onClick={closeMobileMenu}>
            <BsSearch className="icon search-icon" />
          </a>
          <a href="/" className="icon-link" onClick={closeMobileMenu}>
            <BsBell className="icon bell-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
