import React from "react";
import style from "../../styles/components/_home.module.scss";

import reactIconSM from "../../assets/react.png";
import reactIconMD from "../../assets/react@2x.png";
import reactIconXL from "../../assets/react@3x.png";

import xdIconSM from "../../assets/xd.png";
import xdIconMD from "../../assets/xd@2x.png";
import xdIconXL from "../../assets/xd@3x.png";

import googleIconSM from "../../assets/google.png";
import googleIconMD from "../../assets/google@2x.png";
import googleIconXL from "../../assets/google@3x.png";

export const HomeServices = () => {
  return (
    <section className={style.home_services}>
      <div className={style.home_services_top_container}>
        <div className={style.home_services_title}>
          <span className={style.topline}></span>
          <h2 className={style.home_services_title__text}>services</h2>
        </div>
      </div>

      <div className={style.home_services_container}>
        <div className={style.home_services_container_visual}>
          <img
            srcSet={`${reactIconSM} 300w, ${reactIconMD} 768w, ${reactIconXL} 1280w`}
            alt="React Service"
            className={style.home_services_container_visual__img}
          />
        </div>

        <div className={style.home_services_container_content}>
          <h4 className={style.home_services_container_content__title}>
            Frontend Development
          </h4>
          <p className={style.home_services_container_content__text}>
            Orogel, the biggest frozen foods company in Italy, strong in its
            experience as a leading producer of frozen foods, offers a rich,
            complete range that keeps pace with new trends, wihout renouncing to
            good, traditional flavour from the past in Italy.
          </p>
        </div>
      </div>

      <div className={style.home_services_container}>
        <div className={style.home_services_container_visual}>
          <img
            srcSet={`${xdIconSM} 300w, ${xdIconMD} 768w, ${xdIconXL} 1280w`}
            alt="React Service"
            className={style.home_services_container_visual__img}
          />
        </div>
        <div className={style.home_services_container_content}>
          <h4 className={style.home_services_container_content__title}>
            UX Design
          </h4>
          <p className={style.home_services_container_content__text}>
            Orogel, the biggest frozen foods company in Italy, strong in its
            experience as a leading producer of frozen foods, offers a rich,
            complete range that keeps pace with new trends, wihout renouncing to
            good, traditional flavour from the past in Italy.
          </p>
        </div>
      </div>
      <div className={style.home_services_container}>
        <div className={style.home_services_container_visual}>
          <img
            srcSet={`${googleIconSM} 300w, ${googleIconMD} 768w, ${googleIconXL} 1280w`}
            alt="React Service"
            className={style.home_services_container_visual__img}
          />
        </div>
        <div className={style.home_services_container_content}>
          <h4 className={style.home_services_container_content__title}>
            Google Tools
          </h4>
          <p className={style.home_services_container_content__text}>
            I work for Google at the Webtech Project. I implement Google codes
            and cover testing process. Google Analytics, Ads, Tag Manager, and
            Merchant Center are the products I support in professional level.
          </p>
        </div>
      </div>
    </section>
  );
};
