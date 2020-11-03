import React from "react";
import style from "../../styles/components/_portfolio.module.scss";
import imgOrogelSM from "../../assets/orogel@1x.png";

export const PortfolioBody = () => {
  return (
    <section className={style.portfolio_body}>
      {/* OROGEL */}
      <div className={style.portfolio_body_container}>
        <div className={style.portfolio_body_container_title}>
          <span className={style.topline}></span>
          <h2 className={style.portfolio_body_container_title__text}>Orogel</h2>
        </div>

        <div className={style.portfolio_body_container_visual}>
          <img
            src={imgOrogelSM}
            className={style.portfolio_body_container_visual__img}
          />
        </div>
        <div className={style.portfolio_body_container_content}>
          <p className={style.portfolio_body_container_content__text}>
            Orogel, the biggest frozen foods company in Italy, strong in its
            experience as a leading producer of frozen foods, offers a rich,
            complete range that keeps pace with new trends, wihout renouncing to
            good, traditional flavour from the past in Italy.
          </p>
          <a href="#" className={style.portfolio_body_container_content__link}>
            <h4>Visit &gt;</h4>
          </a>
        </div>
      </div>
      {/* OROGEL FRESCO */}
      <div className={style.portfolio_body_container}>
        <div className={style.portfolio_body_container_title}>
          <span className={style.topline}></span>
          <h2 className={style.portfolio_body_container_title__text}>
            Orogel Fresco
          </h2>
        </div>

        <div className={style.portfolio_body_container_visual}>
          <img
            src={imgOrogelSM}
            className={style.portfolio_body_container_visual__img}
          />
        </div>
        <div className={style.portfolio_body_container_content}>
          <p className={style.portfolio_body_container_content__text}>
            Orogel, the biggest frozen foods company in Italy, strong in its
            experience as a leading producer of frozen foods, offers a rich,
            complete range that keeps pace with new trends, wihout renouncing to
            good, traditional flavour from the past in Italy.
          </p>
          <a href="#" className={style.portfolio_body_container_content__link}>
            <h4>Visit &gt;</h4>
          </a>
        </div>
      </div>
      {/* ONIT */}
      <div className={style.portfolio_body_container}>
        <div className={style.portfolio_body_container_title}>
          <span className={style.topline}></span>
          <h2 className={style.portfolio_body_container_title__text}>Onit</h2>
        </div>

        <div className={style.portfolio_body_container_visual}>
          <img
            src={imgOrogelSM}
            className={style.portfolio_body_container_visual__img}
          />
        </div>
        <div className={style.portfolio_body_container_content}>
          <p className={style.portfolio_body_container_content__text}>
            Onit Group is one of the biggest IT company that offers professional
            software solutions and consulting services for business management
            and organization in Romagna region based on Forli-Cesena.
          </p>
          <a href="#" className={style.portfolio_body_container_content__link}>
            <h4>Visit &gt;</h4>
          </a>
        </div>
      </div>

      {/* LINXS */}
      <div className={style.portfolio_body_container}>
        <div className={style.portfolio_body_container_title}>
          <span className={style.topline}></span>
          <h2 className={style.portfolio_body_container_title__text}>Linxs</h2>
        </div>

        <div className={style.portfolio_body_container_visual}>
          <img
            src={imgOrogelSM}
            className={style.portfolio_body_container_visual__img}
          />
        </div>
        <div className={style.portfolio_body_container_content}>
          <p className={style.portfolio_body_container_content__text}>
            LINXS SRL is located in FORLI'-CESENA, Italy and is part of the
            Computer Software Industry. LINXS SRL has employees across all of
            its locations. There are 2 companies in the LINXS SRL corporate
            family.
          </p>
          <a href="#" className={style.portfolio_body_container_content__link}>
            <h4>Visit &gt;</h4>
          </a>
        </div>
      </div>

      {/* FABULA */}
      <div className={style.portfolio_body_container}>
        <div className={style.portfolio_body_container_title}>
          <span className={style.topline}></span>
          <h2 className={style.portfolio_body_container_title__text}>Fabula</h2>
        </div>

        <div className={style.portfolio_body_container_visual}>
          <img
            src={imgOrogelSM}
            className={style.portfolio_body_container_visual__img}
          />
        </div>
        <div className={style.portfolio_body_container_content}>
          <p className={style.portfolio_body_container_content__text}>
            LINXS SRL is located in FORLI'-CESENA, Italy and is part of the
            Computer Software Industry. LINXS SRL has employees across all of
            its locations. There are 2 companies in the LINXS SRL corporate
            family.
          </p>
          <a href="#" className={style.portfolio_body_container_content__link}>
            <h4>Visit &gt;</h4>
          </a>
        </div>
      </div>
    </section>
  );
};
