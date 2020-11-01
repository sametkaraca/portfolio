import React, { useState } from "react";
import style from "../styles/components/_navbar.module.scss";

const Navbar = () => {
  const state = useState(false);

  const isOpen = state[0];
  const setIsOpen = state[1];

  const isOpenClass = isOpen ? style.open : "";
  const navLinks = ["About", "Portfolio", "Projects"];

  return (
    <nav className={style.nav_bar}>
      <div className={style.nav_hamburger} onClick={() => setIsOpen(!isOpen)}>
        <div className={style.nav_hamburger__line}></div>
        <div className={style.nav_hamburger__line}></div>
        <div className={style.nav_hamburger__line}></div>
      </div>

      <ul className={[style.nav_links, isOpenClass].join(" ")}>
        {navLinks.map((item) => (
          <li key={item} className={style.nav_links__link}>

            <a href="#home" className={style.nav_links__link__a}>{item}</a>

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
