import s from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={s.navWrapper}>
            <a href='#main' className={s.navLink}>Main</a>
            <a href='#about' className={s.navLink}>About</a>
            <a href='#portfolio' className={s.navLink}>Portfolio</a>
            <a href='#contact' className={s.navLink}>Contact</a>
        </div>
    );
}