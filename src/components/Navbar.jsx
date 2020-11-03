import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/components/_navbar.module.scss";

export const Navbar = () => {
  const state = useState(false);

  const isOpen = state[0];
  const setIsOpen = state[1];

  const isOpenClass = isOpen ? style.open : "";
  const navLinks = ["Home", "About", "Portfolio", "Lab"];

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
            <NavLink to={item} className={style.nav_links__link__a}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
