import React from "react";
import style from "../../styles/main.module.scss";

import sametSM from "../../assets/samet.png";
import sametMD from "../../assets/samet@x2.png";
import sametXL from "../../assets/samet@x3.png";
import sametXXL from "../../assets/samet@x4.png";

export const AboutHeader = () => {
  return (
    <section className={style.about_header}>
      <div className={style.about_header_banner}>
        <picture className={style.about_header_banner__picture}>
          <source srcSet={sametXXL} media="(min-width: 1200px)" />
          <source srcSet={sametXL} media="(min-width: 768px)" />
          <source srcSet={sametMD} media="(min-width: 540px)" />
          <img
            srcSet={sametSM}
            alt="Samet Banner"
            className={style.about_header_banner__picture__img}
          />
        </picture>
      </div>
      <div className={style.about_header_container}>
        <div className={style.about_header_container_title}>
          <span className={style.topline}></span>
          <h1 className={style.about_header_container_title__text}>About</h1>
          <h3 className={style.about_header_container_title__content}>
            <br />
            I'm Samet. <br /> A frontend engineer.
          </h3>
        </div>
      </div>
    </section>
  );
};
