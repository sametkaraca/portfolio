import React from "react";
import style from "../../styles/components/_project.module.scss";

import cesenaSM from "../../assets/cesena.png";
import cesenaMD from "../../assets/cesena@x2.png";
import cesenaXL from "../../assets/cesena@x3.png";
import cesenaXXL from "../../assets/cesena@x4.png";

export const ProjectHeader = () => {
  return (
    <section className={style.project_header}>
      <div className={style.project_header_banner}>
        <picture className={style.project_header_banner__picture}>
          <source srcSet={cesenaXXL} media="(min-width: 1200px)" />
          <source srcSet={cesenaXL} media="(min-width: 768px)" />
          <source srcSet={cesenaMD} media="(min-width: 540px)" />
          <img
            srcSet={cesenaSM}
            alt="Samet Banner"
            className={style.project_header_banner__picture__img}
          />
        </picture>
      </div>

      <div className={style.project_header_container}>
        <div className={style.project_header_container_title}>
          <span className={style.topline}></span>
          <h1 className={style.project_header_container_title__text}>
            project
          </h1>
          <h3 className={style.project_header_container_title__content}>
            The Participated
            <br /> Projects in Italy
          </h3>
        </div>
      </div>
    </section>
  );
};
