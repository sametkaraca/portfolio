import React from "react";
import style from "../../styles/main.module.scss";

import travelSM from "../../assets/travel.png";
import travelMD from "../../assets/travel@x2.png";
import travelXL from "../../assets/travel@x3.png";
import travelXXL from "../../assets/travel@x4.png";

export const AboutTravel = () => {
  return (
    <section className={style.about_travel}>
      <picture className={style.about_travel__picture}>
        <source srcSet={travelXXL} media="(min-width: 1200px)" />
        <source srcSet={travelXL} media="(min-width: 768px)" />
        <source srcSet={travelMD} media="(min-width: 540px)" />
        <img
          srcSet={travelSM}
          alt="Travel"
          className={style.about_travel__picture__img}
        />
      </picture>
    </section>
  );
};
