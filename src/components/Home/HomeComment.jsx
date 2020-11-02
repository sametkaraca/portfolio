import React from "react";
import style from "../../styles/components/_home.module.scss";
import profileIconTop from "../../assets/mike@1x.png";
import profileIconBottom from "../../assets/karrar@1x.png";

export const HomeComment = () => {
  return (
    <section className={style.home_comment}>
      <div className={style.home_comment_container}>
        <p className={style.home_comment_container__content}>
          "Samet is a very hardworking workmate. I'm happy that we worked with
          him together. He is a very energetic and positive person. We had a
          great time here in Cesena. I taught him a lot. He was always hungry
          for knowledge."
        </p>
        <span className={style.commentline}></span>
        <br />
        <img src={profileIconTop} alt="" srcset="" />

        <h5 className={style.home_comment_container__name}>
          Michelangelo Arcuri
        </h5>
        <h6 className={style.home_comment_container__position}>
          Senior Full Stack Developer
        </h6>
      </div>

      {/* ANCHOR */}
      <div className={style.home_comment_container}>
        <p className={style.home_comment_container__content}>
          "We worked with Samet in several software projects. He is a problem
          solver who always delivers an exceptional quality of work. He works
          hard and ready for challenges."
        </p>
        <span className={style.commentline}></span>
        <br />
        <img src={profileIconBottom} alt="" srcset="" />

        <h5 className={style.home_comment_container__name}>Karrar Abd Ali</h5>
        <h6 className={style.home_comment_container__position}>
          Software Developer
        </h6>
      </div>
    </section>
  );
};