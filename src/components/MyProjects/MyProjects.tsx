import React from 'react';
import s from './MyProjects.module.css';
import {Project} from "./Project/Project";


export const MyProjects = () => {
    return (
        <div className={s.projectsWrapper} id='portfolio'>
            <div className={s.containerInfo}>
                <div className={s.blockTitle}>
                    <h1>
                        MY
                        <span>PORTFOLIO</span>
                    </h1>
                    <span className={s.titleBg}>WORKS</span>
                </div>
                <div className={s.projects}>
                    <Project title={"todolist"}
                             link={'https://github.com/gaarkusha/todolist'}
                             description={'This app is for organizing tasks. The user can group tasks into different groups and delete as they are completed.'}/>
                    <Project title={"weather"}
                             link={'https://github.com/gaarkusha/my-weather'}
                             description={'The weather app helps the user to keep track of the weather forecast for the selected city, as well as the amount of precipitation, humidity and much more.'}/>
                    <Project title={"social network"}
                             link={'https://github.com/gaarkusha/my-network'}
                             description={'MesUP application helps users to communicate with friends, find new acquaintances, share news, upload posts and much more.'}/>
                </div>
            </div>
        </div>
    );
}