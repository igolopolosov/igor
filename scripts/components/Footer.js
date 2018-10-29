import { format } from 'date-fns';
import React from 'react'
import { Navigation } from './blocks/Navigation'
import styles from './Main.css'

const socialLinks = [
    {
        to: 'https://stackoverflow.com/story/usehotkey',
        title: 'StackOverflow'
    },
    // {
    //     to: 'https://yadi.sk/d/QzyQ04br3HXrmU',
    //     title: 'CV'
    // },
    {
        to: 'https://www.linkedin.com/in/igor-golopolosov-98382012a/',
        title: 'LinkedIn'
    },
    {
        to: 'https://github.com/usehotkey',
        title: 'GitHub'
    },
    // {
    //     to: 'https://soundcloud.com/hotkeymusic',
    //     title: 'SoundCloud'
    // },
]

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialNav}>
                <Navigation links={socialLinks} external />
            </div>
            <div>
                <small>
                    {`Igor Golopolosov, 2016-${format(new Date(), 'YYYY')} ♥️`}
                    <b>igolopolosov@gmail.com</b>
                </small>
            </div>
        </footer>
    )
}
