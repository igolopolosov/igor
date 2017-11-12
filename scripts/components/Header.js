import React from 'react'
import { Navigation } from './_blocks/Navigation'
import styles from './Main.css'

const projectLinks = [
    {
        to: '/',
        title: 'Home'
    },
    {
        to: 'blog',
        title: 'Blog'
    },
    {
        to: 'playground',
        title: 'Playground'
    },
]

export const Header = () => {
    return (
        <div className={styles.header}>
            <Navigation links={projectLinks} />
        </div>
    )
}
