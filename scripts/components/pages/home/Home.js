import React from 'react'
import styles from './Home.css'

import { Stickers } from './Stickers'

export const Home = () => (
	<div>
		<h2>Hello, World! It's my laboratory.</h2>
		<Stickers />
		<div className={styles.avatar} />
		<p>
			<b>Igor Golopolosov.</b> Senior Software Enginner at <a target='_blank' rel='noopener' href='https://www.comparethemarket.com'>CTM</a>
		</p>
		<h3>Find out more details about me:</h3>
	</div>
)
