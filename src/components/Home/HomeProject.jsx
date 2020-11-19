import React from "react";
import style from "../../styles/components/_home.module.scss";
import orogelIconSM from "../../assets/onit.png";
import orogelIconMD from "../../assets/onit@x2.png";
import orogelIconXL from "../../assets/onit@x3.png";

export const HomeProject = () => {
  return (
    <section className={style.home_project}>
      <div className={style.home_project_title}>
        <span className={style.topline}></span>
        <h2 className={style.home_project_title__text}>Featured Project</h2>
      </div>

      <picture className={style.home_project_visual}>
        <source srcSet={orogelIconXL} media="(min-width: 768px)" />
        <source srcSet={orogelIconMD} media="(min-width: 540px)" />
        <img
          srcSet={orogelIconSM}
          alt="Samet Banner"
          className={style.home_services_visual__img}
        />
      </picture>

      <div className={style.home_project_content}>
        <p className={style.home_project_content__text}>
          Orogel, the biggest frozen foods company in Italy, strong in its
          experience as a leading producer of frozen foods, offers a rich,
          complete range that keeps pace with new trends, wihout renouncing to
          good, traditional flavour from the past in Italy.
        </p>
        <a
          href="https://www.orogel.it/"
          target={`_blank`}
          className={style.home_project_content__link}
        >
          <h4>Visit &gt;</h4>
        </a>
      </div>
    </section>
  );
};
