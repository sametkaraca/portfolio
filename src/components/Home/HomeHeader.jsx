import React from "react";
import style from "../../styles/components/_home.module.scss";

export const HomeHeader = () => {
  return (
    <section className={style.home_header}>
      <div className={style.home_header_salute}>
        <h1 className={style.home_header_salute__text}>Hello&#44;</h1>
      </div>
      <div className={style.home_header_name}>
        <h1 className={style.home_header_name__text}> I'm Samet</h1>
        <h3 className={style.home_header_name__subtext}>
          Frontend Engineer <hr className={style.home_header_name__line} />{" "}
          UI/UX Designer
        </h3>
      </div>
      <div className={style.home_header_portfolio}>
        <a className={style.home_header_portfolio__link} href="www.google.com">
          Portfolio &gt;
        </a>
      </div>
    </section>
  );
};
