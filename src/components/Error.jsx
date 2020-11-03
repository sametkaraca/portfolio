import React from "react";
import style from "../styles/main.module.scss";

export const Error = () => {
  return (
    <section className={style.error}>
      <div className={style.error_container}>
        <h1 className={style.error_container__title}>404</h1>
        <h5 className={style.error_container__content}>
          I can’t seem to find the page you’re looking for
        </h5>
      </div>
    </section>
  );
};
