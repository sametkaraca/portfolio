import React from "react";
import style from "../../styles/components/_portfolio.module.scss";

import orogelIconSM from "../../assets/orogel.png";
import orogelIconMD from "../../assets/orogel@x2.png";
import orogelIconXL from "../../assets/orogel@x3.png";

import frescoIconSM from "../../assets/fresco.png";
import frescoIconMD from "../../assets/fresco@x2.png";
import frescoIconXL from "../../assets/fresco@x3.png";

import onitIconSM from "../../assets/onit.png";
import onitIconMD from "../../assets/onit@x2.png";
import onitIconXL from "../../assets/onit@x3.png";

import linxsIconSM from "../../assets/linxs.png";
import linxsIconMD from "../../assets/linxs@x2.png";
import linxsIconXL from "../../assets/linxs@x3.png";

import fabulaIconSM from "../../assets/fabula.png";
import fabulaIconMD from "../../assets/fabula@x2.png";
import fabulaIconXL from "../../assets/fabula@x3.png";

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
            srcSet={`${orogelIconSM} 300w, ${orogelIconMD} 768w, ${orogelIconXL} 1280w`}
            alt="React Service"
            className={style.home_services_container_visual__img}
          />
        </div>
        <div className={style.portfolio_body_container_content}>
          <p className={style.portfolio_body_container_content__text}>
            Orogel, the biggest frozen foods company in Italy, strong in its
            experience as a leading producer of frozen foods, offers a rich,
            complete range that keeps pace with new trends, wihout renouncing to
            good, traditional flavour from the past in Italy.
          </p>
          <a
            href="https://www.orogel.it/"
            target={`_blank`}
            className={style.portfolio_body_container_content__link}
          >
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
            srcSet={`${frescoIconSM} 300w, ${frescoIconMD} 768w, ${frescoIconXL} 1280w`}
            alt="React Service"
            className={style.home_services_container_visual__img}
          />
        </div>
        <div className={style.portfolio_body_container_content}>
          <p className={style.portfolio_body_container_content__text}>
            Orogel, the biggest frozen foods company in Italy, strong in its
            experience as a leading producer of frozen foods, offers a rich,
            complete range that keeps pace with new trends, wihout renouncing to
            good, traditional flavour from the past in Italy.
          </p>
          <a
            href="https://www.orogelfresco.it/"
            target={`_blank`}
            className={style.portfolio_body_container_content__link}
          >
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
            srcSet={`${onitIconSM} 300w, ${onitIconMD} 768w, ${onitIconXL} 1280w`}
            alt="React Service"
            className={style.home_services_container_visual__img}
          />
        </div>
        <div className={style.portfolio_body_container_content}>
          <p className={style.portfolio_body_container_content__text}>
            Onit Group is one of the biggest IT company that offers professional
            software solutions and consulting services for business management
            and organization in Romagna region based on Forli-Cesena.
          </p>
          <a
            href="https://www.onit.it/"
            target={`_blank`}
            className={style.portfolio_body_container_content__link}
          >
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
            srcSet={`${linxsIconSM} 300w, ${linxsIconMD} 768w, ${linxsIconXL} 1280w`}
            alt="React Service"
            className={style.home_services_container_visual__img}
          />
        </div>
        <div className={style.portfolio_body_container_content}>
          <p className={style.portfolio_body_container_content__text}>
            LINXS SRL is located in FORLI'-CESENA, Italy and is part of the
            Computer Software Industry. LINXS SRL has employees across all of
            its locations. There are 2 companies in the LINXS SRL corporate
            family.
          </p>
          <a
            href="https://www.linxs.it/"
            target={`_blank`}
            className={style.portfolio_body_container_content__link}
          >
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
            srcSet={`${fabulaIconSM} 300w, ${fabulaIconMD} 768w, ${fabulaIconXL} 1280w`}
            alt="React Service"
            className={style.home_services_container_visual__img}
          />
        </div>
        <div className={style.portfolio_body_container_content}>
          <p className={style.portfolio_body_container_content__text}>
            LINXS SRL is located in FORLI'-CESENA, Italy and is part of the
            Computer Software Industry. LINXS SRL has employees across all of
            its locations. There are 2 companies in the LINXS SRL corporate
            family.
          </p>
          <a
            href="https://www.fabulagroup.it/"
            target={`_blank`}
            className={style.portfolio_body_container_content__link}
          >
            <h4>Visit &gt;</h4>
          </a>
        </div>
      </div>
    </section>
  );
};
