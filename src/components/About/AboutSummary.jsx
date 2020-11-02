import React from 'react';
import style from "../../styles/main.module.scss";

export const AboutSummary = () => {
    return (<section className={style.about_summary}>
        <div className={style.about_summary_container}>
            <span className={style.commentline}></span>

            <h4 className={style.about_summary_container__title}>
                Find out who I am, where I'm from and what I'm all about
            </h4>
            <span className={style.commentline}></span>

            <p className={style.about_summary_container__content}>
                I had my master's degree in Poland. I worked in Italy as a front-end engineer. I'm currently working in Krakow, Poland. During the day I’m the web implementation engineer at the Google Webtech project. In the evenings I spend my time working on front-end projects.
              </p>
            <br />
        </div>
    </section>);
}