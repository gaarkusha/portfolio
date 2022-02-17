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
                    <Skill title={"JAVASCRIPT"} percent={'65%'}/>
                    <Skill title={"React"} percent={'75%'}/>
                    <Skill title={"Redux"} percent={'75%'}/>
                    <Skill title={"HTML"} percent={'65%'}/>
                    <Skill title={"CSS"} percent={'75%'}/>
                    <Skill title={"TYPESCRIPT"} percent={'85%'}/>
                </div>
            </div>
        </div>
    );
}