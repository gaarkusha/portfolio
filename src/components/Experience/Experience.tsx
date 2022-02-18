import React from 'react';
import s from './Experience.module.css';

export const Experience = () => {
    return (
        <div className={s.educationWrapper}>
            <div className={s.containerInfo}>
                <div className={s.title}>
                    <h2>EXPERIENCE &
                        <span>EDUCATION</span>
                    </h2>
                </div>
                <div className={s.contentWrapper}>
                    <div className={s.experienceBlock}>
                        <div className={s.contentBlock}>
                            <span>2020 — PRESENT</span>
                            <div className={s.contentTitleList}>
                                <h4>FRONTEND DEVELOPER</h4>
                            </div>
                            <p className={s.content}>
                                My path to the frontend started with HTML/CSS.
                                I like to do visuals. I didn’t stop there and started
                                studying the javascript. later I started training in an IT incubator.
                                On the course I study React/Redux/Typescript.
                                Such technologies as React using hooks / Redux / React-redux /
                                React-router-dom / Redux-thunk / Axios / Unit Tests / Storybook /
                                Formik / Material-ui libraries were studied in educational projects.
                            </p>
                            <hr className={s.separation}/>
                        </div>
                        <div className={s.contentBlock}>
                            <span>2019</span>
                            <div className={s.contentTitleList}>
                                <h4>interior designer</h4>
                            </div>
                            <p className={s.content}>
                                I have the skills to use AutoCAD, 3dMAX, Photoshop, Revit.
                                I love to highlight beautiful things in small things.
                                I love to present non-standard things and welcome creative ideas.
                            </p>
                            <hr className={s.separation}/>
                        </div>
                    </div>
                    <div className={s.educationBlock}>
                        <div className={s.contentBlock}>
                            <span>2020 — PRESENT</span>
                            <div className={s.contentTitleList}>
                                <h4>nanotechnology engineer</h4>
                            </div>
                            <p className={s.content}>
                                I am studying at BSUIR, specializing in nanotechnology
                                and nanomaterials in electronics. On the specialty
                                I study the basics of microelectronics, understanding
                                the use of certain materials.
                            </p>
                            <hr className={s.separation}/>
                        </div>
                        <div className={s.contentBlock}>
                            <span>2020</span>
                            <div className={s.contentTitleList}>
                                <h4>sales manager</h4>
                            </div>
                            <p className={s.content}>
                                I was engaged in cold sales.
                                I like to communicate with people and most
                                importantly listen to people. This work helped me to relax,
                                become more open to communication with strangers,
                                and also taught me how to deal with stressful situations.
                            </p>
                            <hr className={s.separation}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}