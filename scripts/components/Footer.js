import moment from 'moment'
import React from 'react'
import { Navigation } from './_blocks/Navigation'
import styles from './Main.css'

const socialLinks = [
    {
        to: 'https://stackoverflow.com/story/usehotkey',
        title: 'StackOverflow'
    },
    {
        to: 'https://yadi.sk/d/QzyQ04br3HXrmU',
        title: 'CV'
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
        <div className={styles.footer}>
            <div className={styles.socialNav}>
                <Navigation links={socialLinks} external />
            </div>
            <div>
                <small>
                    {`Igor Golopolosov, 2016-${moment().year()}. `}
                    <b>igolopolosov@gmail.com</b>
                </small>
            </div>
        </div>
    )
}
