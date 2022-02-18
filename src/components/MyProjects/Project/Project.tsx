import React from 'react';
import s from './Project.module.css';

type ProjectProps = {
    title: string
    description: string
    link: string
    images: string
}

export const Project = (props: ProjectProps) => {
    return (
        <div className={s.projectWrapper}>
            <div className={s.picture} style={{backgroundImage: props.images}}></div>
            <div className={s.btnWrapper}>
                <a target='_blank' href={`${props.link}`} className={s.btnMain}>watch</a>
            </div>
            <div className={s.contentList}>
                <h4>{props.title}</h4>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}