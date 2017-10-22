import React from 'react'
import styles from './Chat.css'
import { Button } from '../_blocks/Button'
import { sendMessage } from './sendMessage'

export class Chat extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            sender: '',
            message: ''
        }

        // Force open Hire Me dialog
        setTimeout(() => {
            if (!this.state.isOpen) {
                this.toggle()
            }
        }, 5000)
    }

    render() {
        const {isOpen} = this.state

        return (
            <div className={styles.fixedContainer}>
                {
                    isOpen
                        ? this.renderChat()
                        : <Button tertiary onClick={this.toggle}>Hire Me!</Button>
                }
            </div>
        )
    }

    renderChat = () => {
        const {sender, message} = this.state;

        return (
            <div className={styles.chatContainer}>
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

                <Button primary onClick={this.send} disabled={!(sender && message)}>Send!</Button>
            </div>
        )
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
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
        this.toggle();
    }
}
