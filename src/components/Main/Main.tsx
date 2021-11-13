import React from 'react';
import s from './Main.module.css';

export const Main = () => {
    return (
        <div className={s.mainWrapper}>
            <div className={s.containerInfo}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Vladislav Garkusha</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    photo
                </div>
            </div>
        </div>
    );
}