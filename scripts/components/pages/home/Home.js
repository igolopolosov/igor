import React from 'react'
import styles from './Home.css'

import { Stickers } from './Stickers'
import { CTM } from './CTM'

export const Home = () => (
	<div>
		<h2>Hello, World! It's my laboratory.</h2>
		<Stickers />
		<div className={styles.avatar} />
		<div className={styles.intro} >
			<b>Igor Golopolosov.</b>
			{' Senior Software Enginner at '}
			<CTM />
		</div>
		<h3>Find out more details about me:</h3>
	</div>
)
