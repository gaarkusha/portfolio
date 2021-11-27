import React from 'react';
import s from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <div className={s.containerInfo}>
                <h3 className={s.footerTitle}>
                    Designed by Garkusha Vladislav
                </h3>
                <div className={s.mySocialNetwork}>
                    <ul className={s.socialNetworkList}>
                        <li>
                            <a className={s.telegram} target='_blank' href="https://t.me/gaarkushaa"></a>
                        </li>
                        <li>
                            <a className={s.vk} target='_blank' href="https://vk.com/gaarkusha"></a>
                        </li>
                        <li>
                            <a className={s.instagram} target='_blank' href="https://www.instagram.com/gaarkusha/"></a>
                        </li>
                        <li>
                            <a className={s.linkedin} target='_blank' href="https://www.linkedin.com/in/gaarkusha/"></a>
                        </li>
                        <li>
                            <a className={s.github} target='_blank' href="https://github.com/gaarkusha"></a>
                        </li>
                    </ul>
                </div>
                <h4 className={s.textReserved}>© 2021 All rights reserved</h4>
            </div>
        </div>
    );
}