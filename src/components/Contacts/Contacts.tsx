import {useFormik} from 'formik';
import React, {useState} from 'react';
import s from './Contacts.module.css';
import {Popup} from "../Popup/Popup";


type FormikErrorType = {
    email?: string
    name?: string
    subject?: string
    message?: string
}

export const Contacts = () => {

    const [popupActive, setPopupActive] = useState<boolean>(false)

    const formik = useFormik({
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        initialValues: {
            email: '',
            name: '',
            subject: '',
            message: ''
        },
        onSubmit: (values) => {
            formik.resetForm()
        }
    })

    return (
        <div className={s.contactsWrapper} id='contact'>
            {popupActive && <Popup closePopup={setPopupActive}/>}
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
                            Belarus, Minsk City
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
                                <a className={s.instagram} target='_blank'
                                   href="https://www.instagram.com/gaarkusha/"></a>
                            </li>
                            <li>
                                <a className={s.linkedin} target='_blank'
                                   href="https://www.linkedin.com/in/gaarkusha/"></a>
                            </li>
                            <li>
                                <a className={s.github} target='_blank' href="https://github.com/gaarkusha"></a>
                            </li>
                        </ul>
                    </div>
                    <div className={s.formWrapper}>
                        <form onSubmit={formik.handleSubmit}>
                            <div className={s.formBlock}>
                                <div className={s.yourNameBlock}>
                                    <div className={s.formGroup}>
                                        <input type='name'
                                               placeholder='YOUR NAME'
                                               {...formik.getFieldProps('name')}
                                               className={s.inputName}/>
                                    </div>
                                </div>
                                <div className={s.yourMailBlock}>
                                    <div className={s.formGroup}>
                                        <input type="email"
                                               {...formik.getFieldProps('email')}
                                               placeholder='YOUR EMAIL'
                                               className={s.inputName}/>
                                    </div>
                                </div>
                                <div className={s.yourSubjectBlock}>
                                    <div className={s.formGroup}>
                                        <input type="subject"
                                               {...formik.getFieldProps('subject')}
                                               placeholder='YOUR SUBJECT'
                                               className={s.inputSubject}/>
                                    </div>
                                </div>
                                <div className={s.yourMessageBlock}>
                                    <div className={s.formGroup}>
                                        <input type='message'
                                               {...formik.getFieldProps('message')}
                                               placeholder='YOUR MESSAGE'
                                               className={s.textareaMessage}>
                                        </input>
                                    </div>
                                </div>
                                <div className={s.btnWrapper}>
                                    <button type='submit' className={s.btnMain} onClick={() => setPopupActive(true)}>send message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}