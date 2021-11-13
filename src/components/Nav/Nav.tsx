import React from 'react';
import s from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={s.navWrapper}>
            <a href='#!' className={s.navLink}>Main</a>
            <a href='#!' className={s.navLink}>Skills</a>
            <a href='#!' className={s.navLink}>Projects</a>
            <a href='#!' className={s.navLink}>Contacts</a>
        </div>
    );
}