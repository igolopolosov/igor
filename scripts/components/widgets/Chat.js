import React from 'react'
import styles from './Chat.css'
import buttonStyles from '../../../styles/bricks/button.css';

export class Chat extends React.PureComponent {
    render() {
        return (
            <div className={styles.container}>
                <div>Tell me what you want:</div>
                <textarea rows={3} className={styles.message} />
                <button className={buttonStyles.btnPrimary}>Send!</button>
            </div>
        )
    }
}
