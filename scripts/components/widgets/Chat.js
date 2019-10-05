import React from 'react'
import styles from './Chat.less'
import { Button } from '../blocks/Button'
import { sendMessage } from './sendMessage'

const CHAT_TIMEOUT = 5 * 1000
const CHAT_STATES = {
    NONE: 'NONE',
    OPENED: 'OPENED',
    SUCCESS: 'SUCCESS',
}

export class Chat extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            state: CHAT_STATES.NONE,
            sender: '',
            message: '',
        }

        // Force open Hire Me dialog
        // if (PRODUCTION) {
            setTimeout(() => {
                this.toggle(CHAT_STATES.OPENED)
            }, CHAT_TIMEOUT)
        // }
    }

    render() {
        const {state} = this.state

        return (
            <div className={styles.fixedContainer}>
                {state === CHAT_STATES.NONE && <Button tertiary onClick={() => this.toggle(CHAT_STATES.OPENED)}>Hire Me!</Button>}
                {state === CHAT_STATES.OPENED && this.renderChat()}
                {state === CHAT_STATES.SUCCESS && this.renderSuccess()}
            </div>
        )
    }

    renderSuccess = () => {
        return (
            <div className={styles.chatContainer}>
                <p>Thank you, you are successfully sent email for me!</p>
                <small>Kind regards, Igor Golopolosov</small>
            </div>
        )
    }

    renderChat = () => {
        const {sender, message} = this.state;

        return (
            <div className={styles.chatContainer}>
                <div className={styles.closeMark} onClick={() => this.toggle(CHAT_STATES.NONE)}>✖</div>
                <h2>Hire Me!</h2>

                <p>Write below why I would like to work with you:</p>
                <textarea
                    placeholder='Tell me what you want'
                    rows={3}
                    className={styles.message}
                    onChange={this.changeMessage}
                    value={message}
                />

                <p>Add any your contact. email, phone, skype, etc.</p>
                <input
                    placeholder='best_hr@best_company.com'
                    onChange={this.changeSender}
                    value={sender}
                />

                <Button secondary onClick={this.send} disabled={!(sender && message)}>Send!</Button>
            </div>
        )
    }

    toggle = (state) => {
        this.setState({
            state
        })
    }

    changeMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    changeSender = (e) => {
        this.setState({
            sender: e.target.value
        })
    }

    send = () =>{
        const {sender, message} = this.state;
        sendMessage(`Hiring Message from ${sender}`, message);
        this.setState({
            sender: '',
            message: ''
        })
        this.showSuccess();
    }

    showSuccess = () =>{
        this.toggle(CHAT_STATES.SUCCESS)

        setTimeout(() => {
            this.toggle(CHAT_STATES.NONE)
        }, CHAT_TIMEOUT)
    }
}
