import React from 'react';
import s from './Skills.module.css';
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsWrapper}>
            <div className={s.containerInfo}>
                <div className={s.title}>
                    <h2>SKILLS</h2>
                </div>
                <div className={s.skills}>
                    <Skill title={"JAVASCRIPT"} percent={'70%'}/>
                    <Skill title={"React"} percent={'80%'}/>
                    <Skill title={"Redux"} percent={'75%'}/>
                    <Skill title={"HTML"} percent={'50%'}/>
                    <Skill title={"CSS"} percent={'60%'}/>
                    <Skill title={"TYPESCRIPT"} percent={'70%'}/>
                </div>
            </div>
        </div>
    );
}