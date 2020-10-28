import React from "react";
import style from "../styles/main.module.scss";
import inIconSM from "../assets/in@1x.png";
// import inIconMD from "../assets/in@2x.png";
import gitIconSM from "../assets/git@1x.png";
// import gitIconMD from "../assets/git@2x.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_linkedin}>
        <img
          src={inIconSM}
          alt="linkedin"
          className={style.footer_linkedin_img}
        />
      </div>

      <div className={style.footer_git}>
        <img src={gitIconSM} alt="github" className={style.footer_github} />
      </div>
      <span className={style.footer_copyright}>
        Copyright &copy;2020 Samet Karaca
      </span>
    </footer>
  );
};

export default Footer;
