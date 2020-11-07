import React from "react";
import style from "../styles/components/_error.module.scss";

export const Error = () => {
  return (
    <section className={style.error}>
      <div className={style.error_container}>
        <h1 className={style.error_container__title}>404</h1>
      </div>
    </section>
  );
};
