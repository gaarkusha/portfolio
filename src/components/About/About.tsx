import React from 'react';
import s from './About.module.css';

export const About = () => {
    return (
        <div className={s.aboutWrapper} id='about'>
            <div className={s.containerInfo}>
                <div className={s.blockTitle}>
                    <h1>
                        ABOUT
                        <span>ME</span>
                    </h1>
                    <span className={s.titleBg}>RESUME</span>
                </div>
                <div className={s.presentationBlock}>
                    <div className={s.personalInfo}>
                        <div className={s.personalTitle}>
                            <h2>PERSONAL INFO</h2>
                        </div>
                        <div className={s.infoBlock}>
                            <div className={s.textInfo}>
                                <p>First Name: Vladislav</p>
                                <p>Age: 20 Years</p>
                                <p>Phone: +375336525601</p>
                                <p>Telegram: @gaarkushaa</p>
                                <p>Education: BSUIR</p>
                            </div>
                            <div className={s.textInfo}>
                                <p>Last Name: Garkusha</p>
                                <p>Nationality: Belarusian</p>
                                <p>Address: Minsk</p>
                                <p>Email: gaarkusha@gmail.com</p>
                                <p>Languages: English, Russian</p>
                            </div>
                        </div>
                        <div className={s.btnWrapper}>
                            <a target='_blank' href='https://drive.google.com/file/d/1L7_A8RykKMT2avMyH7FFm9U-q7dzUQN2/view?usp=sharing' className={s.btnMain}>download cv</a>
                        </div>
                    </div>
                    <div className={s.infoDiagram}>
                        <div className={s.diagramBlock}>
                            <h3 className={s.diagramInfo}>1+</h3>
                            <p className={s.diagramInfoText}>
                                years of
                                <span className={s.diagramInfoSpan}>experience</span>
                            </p>
                        </div>
                        <div className={s.diagramBlock}>
                            <h3 className={s.diagramInfo}>3</h3>
                            <p className={s.diagramInfoText}>
                                completed
                                <span className={s.diagramInfoSpan}>projects</span>
                            </p>
                        </div>
                        <div className={s.diagramBlock}>
                            <h3 className={s.diagramInfo}>SOON</h3>
                            <p className={s.diagramInfoText}>
                                soon
                                <span className={s.diagramInfoSpan}></span>
                            </p>
                        </div>
                        <div className={s.diagramBlock}>
                            <h3 className={s.diagramInfo}>SOON</h3>
                            <p className={s.diagramInfoText}>
                                soon
                                <span className={s.diagramInfoSpan}></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}