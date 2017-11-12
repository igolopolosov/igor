import React from 'react'
import { Navigation } from './_blocks/Navigation'
import { NAVIGATION_LINKS } from './navigation'
import styles from './Main.css'

const projectLinks = [
    NAVIGATION_LINKS.home,
    NAVIGATION_LINKS.blog,
    NAVIGATION_LINKS.playground,
]

export const Header = () => {
    return (
        <div className={styles.header}>
            <Navigation links={projectLinks} />
        </div>
    )
}
