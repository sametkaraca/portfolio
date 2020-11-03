import React from 'react';
import style from "../../styles/components/_portfolio.module.scss";

export const PortfolioHeader = () => {
    return (
        <section className={style.portfolio_header}>
            <div className={style.portfolio_header_container}>
                <div className={style.portfolio_header_container_title}>
                    <span className={style.topline}></span>
                    <h1 className={style.portfolio_header_container_title__text}>Portfolio</h1>
                    <h2 className={style.portfolio_header_container_title__content}>
                        The Participated Projects
                        in
                        Italy
                    </h2>
                </div>
            </div>
        </section>);
}