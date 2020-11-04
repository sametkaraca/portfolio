import React from "react";
import style from "../../styles/components/_portfolio.module.scss";

import cesenaSM from "../../assets/cesena.png";
import cesenaMD from "../../assets/cesena@x2.png";
import cesenaXL from "../../assets/cesena@x3.png";
import cesenaXXL from "../../assets/cesena@x4.png";

export const PortfolioHeader = () => {
  return (
    <section className={style.portfolio_header}>
      <div className={style.portfolio_header_banner}>
        <picture className={style.portfolio_header_banner__picture}>
          <source srcSet={cesenaXXL} media="(min-width: 1200px)" />
          <source srcSet={cesenaXL} media="(min-width: 768px)" />
          <source srcSet={cesenaMD} media="(min-width: 540px)" />
          <img
            srcSet={cesenaSM}
            alt="Samet Banner"
            className={style.portfolio_header_banner__picture__img}
          />
        </picture>
      </div>

      <div className={style.portfolio_header_container}>
        <div className={style.portfolio_header_container_title}>
          <span className={style.topline}></span>
          <h1 className={style.portfolio_header_container_title__text}>
            Portfolio
          </h1>
          <h2 className={style.portfolio_header_container_title__content}>
            The Participated Projects in Italy
          </h2>
        </div>
      </div>
    </section>
  );
};
