import React from 'react'
import { Navigation } from './blocks/Navigation'
import { NAVIGATION_LINKS } from '../consts/navigation'
import styles from './Main.css'

const projectLinks = [
    NAVIGATION_LINKS.home,
    NAVIGATION_LINKS.blog,
    NAVIGATION_LINKS.playground,
    NAVIGATION_LINKS.music,
]

export const Header = () => {
    return (
        <header className={styles.header}>
            <Navigation links={projectLinks} />
        </header>
    )
}
