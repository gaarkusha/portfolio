import React from 'react';
import s from './Portfolio.module.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {MyProjects} from "./components/MyProjects/MyProjects";
import {Footer} from "./components/Footer/Footer";
import {Contacts} from "./components/Contacts/Contacts";
import {About} from "./components/About/About";
import {Experience} from "./components/Experience/Experience";

const Portfolio = () => {
    return (
        <div className={s.portfolioWrapper}>
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Experience/>
            <MyProjects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default Portfolio;
