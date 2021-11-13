import React from 'react';
import s from './Portfolio.module.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";

const Portfolio = () => {
    return (
        <div className={s.portfolioWrapper}>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default Portfolio;
