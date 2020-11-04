import React from "react";
import style from "../styles/main.module.scss";
import inIconSM from "../assets/in@1x.png";
import gitIconSM from "../assets/git@1x.png";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_linkedin}>
        <a
          href={`https://www.linkedin.com/in/samet-karaca-a8b529160/`}
          target={`_blank`}
        >
          <img
            src={inIconSM}
            alt="linkedin"
            className={style.footer_linkedin_img}
          />
        </a>
      </div>

      <div className={style.footer_git}>
        <a href={`https://github.com/sametkaraca`} target={`_blank`}>
          <img src={gitIconSM} alt="github" className={style.footer_github} />
        </a>
      </div>
      <span className={style.footer_copyright}>
        Copyright &copy;2020 Samet Karaca
      </span>
    </footer>
  );
};
