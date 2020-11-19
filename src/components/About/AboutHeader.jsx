import React from "react";
import style from "../../styles/main.module.scss";

import sametSM from "../../assets/samet.png";
import sametMD from "../../assets/samet@x2.png";
import sametXL from "../../assets/samet@x3.png";
import sametXXL from "../../assets/samet@x4.png";

export const AboutHeader = () => {
  return (
    <section className={style.about_header}>
      <picture className={style.about_header__picture}>
        <source srcSet={sametXXL} media="(min-width: 1200px)" />
        <source srcSet={sametXL} media="(min-width: 768px)" />
        <source srcSet={sametMD} media="(min-width: 540px)" />
        <img
          srcSet={sametSM}
          alt="Samet Banner"
          className={style.about_header__picture__img}
        />
      </picture>

      <div className={style.about_header_container}>
        <span className={style.topline}></span>
        <h1 className={style.about_header_container__text}>abouts</h1>
        <h3 className={style.about_header_container__content}>
          The Participated
          <br /> abouts in Italy
        </h3>
      </div>
    </section>
  );
};
