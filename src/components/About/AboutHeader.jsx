import React from 'react';
import style from "../../styles/main.module.scss";

export const AboutHeader = () => {
    return (
        <section className={style.about_header}>
            <div className={style.about_header_container}>
                <div className={style.about_header_container_title}>
                    <span className={style.topline}></span>
                    <h1 className={style.about_header_container_title__text}>About</h1>
                    <h2 className={style.about_header_container_title__content}>Hey,<br /> <br /> I'm Samet. <br /> A frontend engineer.</h2>
                </div>
            </div>
        </section>);
}   