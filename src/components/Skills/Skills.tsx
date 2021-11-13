import React from 'react';
import s from './Skills.module.css';
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsWrapper}>
            <div className={s.containerInfo}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS/TS"} description={'Text about JS/TS'}/>
                    <Skill title={"React"} description={'Text about React'}/>
                    <Skill title={"Redux"} description={'Text about Redux'}/>
                    <Skill title={"HTML/CSS"} description={'Text about HTML/CSS'}/>
                </div>
            </div>
        </div>
    );
}