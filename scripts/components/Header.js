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
        to: 'prediction-book',
        title: 'Prediction Book'
    },
    {
        to: 'days-from-june-13',
        title: 'Days from June 13'
    }
]

export const Header = () => {
    return (
        <div className={styles.header}>
            <Navigation links={projectLinks} />
        </div>
    )
}
