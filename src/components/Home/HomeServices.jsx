import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
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

SwiperCore.use([Navigation, Pagination]);

export const HomeServices = () => {
  return (
    <>
      <div className={style.home_project_container_title}>
        <span className={style.topline}></span>
        <h2 className={style.home_project_container_title__text}>
          featured projects
        </h2>
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className={style.home_project_container}>
            <div className={style.home_project_container_visual}>
              <img
                srcSet={`${reactIconSM} 300w, ${reactIconMD} 768w, ${reactIconXL} 1280w`}
                alt="React Service"
                className={style.home_services_container_visual__img}
              />
            </div>
            <div className={style.home_project_container_content}>
              <h4 className={style.home_project_container_content__title}>
                Development
              </h4>
              <p className={style.home_project_container_content__text}>
                I am a Frontend Engineer with industry experience building
                websites and web applications. I specialize in JavaScript and
                have professional experience working with React. I also have
                experience working with SCSS, Bootstrap, and Vanilla JavaScript.
                You can get in touch on LinkedIn for more info.
              </p>
              <a
                href="https://www.onit.it/"
                target={`_blank`}
                className={style.home_project_container_content__link}
              >
                <h4>Visit &gt;</h4>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.home_project_container}>
            <div className={style.home_project_container_visual}>
              <img
                srcSet={`${xdIconSM} 300w, ${xdIconMD} 768w, ${xdIconXL} 1280w`}
                alt="React Service"
                className={style.home_services_container_visual__img}
              />
            </div>
            <div className={style.home_project_container_content}>
              <h4 className={style.home_project_container_content__title}>
                UX Design
              </h4>
              <p className={style.home_project_container_content__text}>
                I have hand-on experience with Adobe XD and Apple Sketch. I do
                design my own projects.
              </p>
              <a
                href="https://www.onit.it/"
                target={`_blank`}
                className={style.home_project_container_content__link}
              >
                <h4>Visit &gt;</h4>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.home_project_container}>
            <div className={style.home_project_container_visual}>
              <img
                srcSet={`${googleIconSM} 300w, ${googleIconMD} 768w, ${googleIconXL} 1280w`}
                alt="React Service"
                className={style.home_services_container_visual__img}
              />
            </div>
            <div className={style.home_project_container_content}>
              <h4 className={style.home_project_container_content__title}>
                Google Tools
              </h4>
              <p className={style.home_project_container_content__text}>
                I work for Google at the Webtech Project. I implement Google
                codes and cover the testing process. Google Analytics, Ads, Tag
                Manager, and Merchant Center are the products I support at a
                professional level.
              </p>
              <a
                href="https://www.onit.it/"
                target={`_blank`}
                className={style.home_project_container_content__link}
              >
                <h4>Visit &gt;</h4>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
