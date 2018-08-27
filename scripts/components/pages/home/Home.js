import React from 'react'
import styles from './Home.css'

export const Home = () => (
	<div>
		<h2>Hello, World! It's my laboratory.</h2>
		<div className={styles.avatar} />
		<p>
			<b>Igor Golopolosov.</b> Senior Software Enginner at <a target='_blank' href='https://www.comparethemarket.com'>CTM</a>
		</p>
		<h3>Here you'll find my projects:</h3>
	</div>
)
