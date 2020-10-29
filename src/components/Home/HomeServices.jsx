import React from "react";
import style from "../../styles/components/_home.module.scss";
import reactIconSM from "../../assets/react@1x.png";
import xdIconSM from "../../assets/xd@1x.png";
import googleIconSM from "../../assets/google@1x.png";

const HomeServices = () => {
  return (
    <div className={style.home_services}>
      <div className={style.home_services_title}>
        <span className={style.topline}></span>
        <h2 className={style.home_services_title__text}>services</h2>
      </div>
      <div className={style.home_services_container}>
        <div className={style.home_services_visual}>
          <img
            className={style.home_services_visual__img}
            src={reactIconSM}
            alt=""
            srcset=""
          />
        </div>
        <div className={style.home_services_content}>
          <h4 className={style.home_services_content__title}>
            Frontend Development
          </h4>
          <p className={style.home_services_content__text}>
            Orogel, the biggest frozen foods company in Italy, strong in its
            experience as a leading producer of frozen foods, offers a rich,
            complete range that keeps pace with new trends, wihout renouncing to
            good, traditional flavour from the past in Italy.
          </p>
        </div>
      </div>
      <div className={style.home_services_container}>
        <div className={style.home_services_visual}>
          <img
            className={style.home_services_visual__img}
            src={xdIconSM}
            alt=""
            srcset=""
          />
        </div>
        <div className={style.home_services_content}>
          <h4 className={style.home_services_content__title}>UX Design</h4>
          <p className={style.home_services_content__text}>
            Orogel, the biggest frozen foods company in Italy, strong in its
            experience as a leading producer of frozen foods, offers a rich,
            complete range that keeps pace with new trends, wihout renouncing to
            good, traditional flavour from the past in Italy.
          </p>
        </div>
      </div>
      <div className={style.home_services_container}>
        <div className={style.home_services_visual}>
          <img
            className={style.home_services_visual__img}
            src={googleIconSM}
            alt=""
            srcset=""
          />
        </div>
        <div className={style.home_services_content}>
          <h4 className={style.home_services_content__title}>Google Tools</h4>
          <p className={style.home_services_content__text}>
            I work for Google at the Webtech Project. I implement Google codes
            and cover testing process. Google Analytics, Ads, Tag Manager, and
            Merchant Center are the products I support in professional level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
