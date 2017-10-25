import React from 'react'
import styles from './Home.css'

export const Home = () => (
	<div>
		<h2>Hello, World! It's my laboratory.</h2>
		<div className={styles.avatar} />
		<p>
			My name is <b>Igor Golopolosov</b> and I'm Fronted Developer at the <a target='_blank' href='https://www.spotware.com/'>Spotware</a>
		</p>
		<h3>Here you'll find my projects:</h3>
	</div>
)
