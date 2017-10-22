import React from 'react'
import styles from './Chat.css'
import { Button } from '../_blocks/Button'

export class Chat extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            message: ''
        }
    }

    render() {
        const {isOpen} = this.state

        return (
            <div className={styles.fixedContainer}>
                {
                    isOpen
                        ? this.renderChat()
                        : <Button tertiary>Hire Me</Button>
                }
            </div>
        )
    }

    renderChat() {
        return (
            <div className={styles.chatContainer}>
                <div>Tell me what you want:</div>
                <textarea rows={3} className={styles.message} />
                <Button primary>Send!</Button>
            </div>
        )
    }
}
