import React from 'react';
import s from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={s.contactsWrapper} id='contact'>
            <div className={s.containerInfo}>
                <div className={s.blockTitle}>
                    <h1>
                        GET IN
                        <span>TOUCH</span>
                    </h1>
                    <span className={s.titleBg}>CONTACT</span>
                </div>
                <div className={s.contactsBlock}>
                    <div className={s.contactsInfo}>
                        <h3 className={s.contactsTitle}>
                            Don't be
                            <span>SHY !</span>
                        </h3>
                        <p className={s.contactsText}>
                            Feel free to get in touch with me.
                            I am always open to discussing new projects,
                            creative ideas or opportunities to be part of
                            your visions and project.
                        </p>
                        <p className={s.addressInfo}>
                            <span>Address point</span>
                            Belarus, Minsk City, Kamenaya Gorka Station
                        </p>
                        <p className={s.addressInfo}>
                            <span>mail me</span>
                            gaarkusha@gmail.com
                        </p>
                        <p className={s.addressInfo}>
                            <span>call me</span>
                            +375 - (33) - 652 - 56 - 01
                        </p>
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
                    <div className={s.formWrapper}>
                        <form action="#!">
                            <div className={s.formBlock}>
                                <div className={s.yourNameBlock}>
                                    <div className={s.formGroup}>
                                        <input type="text"
                                               name='name'
                                               placeholder='YOUR NAME'
                                               className={s.inputName}/>
                                    </div>
                                </div>
                                <div className={s.yourMailBlock}>
                                    <div className={s.formGroup}>
                                        <input type="email"
                                               name='email'
                                               placeholder='YOUR EMAIL'
                                               className={s.inputName}/>
                                    </div>
                                </div>
                                <div className={s.yourSubjectBlock}>
                                    <div className={s.formGroup}>
                                        <input type="text"
                                               name='subject'
                                               placeholder='YOUR SUBJECT'
                                               className={s.inputSubject}/>
                                    </div>
                                </div>
                                <div className={s.yourMessageBlock}>
                                    <div className={s.formGroup}>
                                        <textarea name="message"
                                                  placeholder='YOUR MESSAGE'
                                                  className={s.textareaMessage}>
                                        </textarea>
                                    </div>
                                </div>
                                <div className={s.btnWrapper}>
                                    <a href='#!' className={s.btnMain}>send message</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}