import React, { useState, useEffect } from 'react'
import styles from './ThemeToggle.less'
import theme from '../../../styles/theme.less'

export const ThemeToggle = () => {
    const now = new Date();
    const isDayTime = now.getHours() >= 6 && now.getHours() <= 20;
    const [isDayTheme, setTheme] = useState(isDayTime);

    useEffect(() => {
        const initialTheme = isDayTheme
            ? theme.light
            : theme.dark;
        document.body.classList.toggle(initialTheme);
    }, []);

    const toggle = () => {
        setTheme(!isDayTheme);
        document.body.classList.toggle(theme.dark);
        document.body.classList.toggle(theme.light);
    };
    const label = isDayTheme
        ? 'day'
        : 'night';
    return (
        <div className={styles.container}>
            <label htmlFor='theme-toggle'>{label}</label>
            <input id='theme-toggle' onChange={toggle} type='checkbox' checked={!isDayTheme} />
        </div>
    )
}
