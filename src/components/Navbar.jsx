import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/components/_navbar.module.scss";

export const Navbar = () => {
  useState(false);
  const [isOpen, setIsOpen] = useState(0, 1);

  const isOpenClass = isOpen ? style.open : "";
  const navLinks = ["Home", "About", "Project", "Lab"];

  return (
    <nav className={style.nav_bar}>
      <div
        className={style.nav_bar_hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={style.nav_bar_hamburger__line}></div>
        <div className={style.nav_bar_hamburger__line}></div>
        <div className={style.nav_bar_hamburger__line}></div>
      </div>

      <ul className={[style.nav_bar_menu, isOpenClass].join(" ")}>
        {navLinks.map((item) => (
          <li key={item}>
            <NavLink
              to={item}
              className={style.nav_bar_menu__link}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
