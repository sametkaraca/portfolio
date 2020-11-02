import React from 'react';
import style from "../../styles/main.module.scss";
import travelIMG from '../../assets/wallpapers/samet_mobile_norway@1x.png';

export const AboutTravel = () => {
    return (
        <section className={style.about_travel}>
            <img className={style.about_travel_img} src={travelIMG} alt="Samet in Norway" srcset="" />
        </section>);
}
