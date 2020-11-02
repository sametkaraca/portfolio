import React from 'react';
import style from "../../styles/main.module.scss";

export const AboutHobbies = () => {
    return (
        <section className={style.about_hobbies}>
            <span className={style.topline}></span>
            <h2 className={style.about_hobbies__maintitle}>Hobbies</h2>

            <p className={style.about_hobbies_content}>
                Travelling is my passion. I  love to discover countries, cities, nature, people, and cultures. I am also interested in languages, analogue photography, vinyl records.
            </p>
        </section>);
}
