import React from 'react';
import s from './Main.module.css';

export const Main = () => {
    return (
        <div className={s.mainWrapper} id='main'>
            <div className={s.containerInfo}>
                <div className={s.photo}></div>
                <div className={s.text}>
                    <h1 className={s.textTitle}>
                        — I'M VLADISLAV GARKUSHA.
                        <span>FRONTEND DEVELOPER</span>
                    </h1>
                    <p className={s.textPresent}>I'm a Belarusian based frontend developer focused on
                        crafting clean & user‑friendly experiences, I am passionate about
                        creating excellent web-products that improves the lives of those
                        around me.
                    </p>
                    <div className={s.btnWrapper}>
                        <a href='#about' className={s.btnMain}>more about me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}