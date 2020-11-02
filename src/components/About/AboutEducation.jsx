import React from 'react';
import style from '../../styles/components/_about.module.scss';

export const AboutEducation = () => {
    return (
        <section className={style.about_education}>
            <span className={style.topline}></span>
            <h2 className={style.about_education__maintitle}>
                Education
                </h2>
            <div className={style.about_education_container}>
                <h5 className={style.about_education_container__title}>Master's Degree</h5>
                <p className={style.about_education_container__title_school} >
                    Poznan University of Technology,

               </p>
                <p className={style.about_education_container__content}>
                    Information and Communication Technologies (ICT)
                </p>
            </div>

            <div className={style.about_education_container}>
                <h5 className={style.about_education_container__title}>Bachelor's Degree</h5>
                <p className={style.about_education_container__title_school} >
                    Anadolu University,

               </p>
                <p className={style.about_education_container__content}>
                    Computer Science
                </p>
            </div>

            <div className={style.about_education_container}>
                <h5 className={style.about_education_container__title}>Achievements</h5>
                <div className={style.about_education_container__card}>
                    <p className={style.about_education_container__title_school} >
                        Universitetet i Sørøst-Norge
               </p>
                    <p className={style.about_education_container__content}>
                        Norway Grant Scholarship+
                </p>
                </div>

                <div className={style.about_education_container__card}>
                    <p className={style.about_education_container__title_school} >
                        Poznań Politechnika
               </p>
                    <p className={style.about_education_container__content}>
                        Academic Achievement Scholarship+
                </p>
                </div>

                <div className={style.about_education_container__card}>
                    <p className={style.about_education_container__title_school} >
                        University of Adam Mickiewicz,
               </p>
                    <p className={style.about_education_container__content}>
                        Erasmus Scholarship+
                </p>
                </div>
            </div>
        </section >);
}
