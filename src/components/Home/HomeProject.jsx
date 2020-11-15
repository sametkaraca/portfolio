import React from "react";
import style from "../../styles/components/_home.module.scss";
import orogelIconSM from "../../assets/onit.png";
import orogelIconMD from "../../assets/onit@x2.png";
import orogelIconXL from "../../assets/onit@x3.png";

export const HomeProject = () => {
  return (
    <section className={style.home_project}>
      <div className={style.home_project_container}>
        <div className={style.home_project_container_title}>
          <span className={style.topline}></span>
          <h2 className={style.home_project_container_title__text}>
            featured projects
          </h2>
        </div>

        <div className={style.home_project_container_visual}>
          <img
            srcSet={`${orogelIconSM} 300w, ${orogelIconMD} 768w, ${orogelIconXL} 1280w`}
            alt="React Service"
            className={style.home_services_container_visual__img}
          />
        </div>
        <div className={style.home_project_container_content}>
          <h4 className={style.home_project_container_content__title}>Onit</h4>
          <p className={style.home_project_container_content__text}>
            Onit Group is one of the biggest IT company that offers professional
            software solutions and consulting services for business management
            and organization in Romagna region based on Forli-Cesena.
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
    </section>
  );
};
