import React from "react";
import style from "../../styles/components/_home.module.scss";
import imgOrogelSM from "../../assets/orogel@1x.png";
import imgOrogelMD from "../../assets/orogel@2x.png";

const HomeProject = () => {

  return (
    <section className={style.home_project}>
      <div className={style.home_project_title}>
        <span className={style.topline}></span>
        <h2 className={style.home_project_title__text}>featured project</h2>
      </div>
      <div className={style.home_project_container}>
        <div className={style.home_project_visual}>
          <img src={imgOrogelSM} className={style.home_project_visual__img} />

        </div>
        <div className={style.home_project_content}>
          <h4 className={style.home_project_content__title}>orogel</h4>
          <p className={style.home_project_content__text}>
            Orogel, the biggest frozen foods company in Italy, strong in its
            experience as a leading producer of frozen foods, offers a rich,
            complete range that keeps pace with new trends, wihout renouncing to
            good, traditional flavour from the past in Italy.
          </p>
          <a href="#" className={style.home_project_content__link}>
            <h4>Visit &gt;</h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeProject;
