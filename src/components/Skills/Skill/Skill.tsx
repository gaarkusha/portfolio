import React from 'react';
import s from './Skill.module.css';

type SkillProps = {
    title: string
    percent: string
}

export const Skill = (props: SkillProps) => {
    return (
        <div className={s.skillWrapper}>
            <div className={s.icon}>
                <span>{props.percent}</span>
                <div className={s.circle}></div>
            </div>
            <h3 className={s.title}>{props.title}</h3>
        </div>
    );
}