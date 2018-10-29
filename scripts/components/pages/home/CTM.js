import React from 'react'
import styles from './CTM.css'

export const CTM = () => (
	<a
		target='_blank'
		rel='noopener'
		href='https://www.comparethemarket.com'
	>
		<img
			className={styles.companyLogo}
			src="http://cdn.comparethemarket.com/market/assets/logos/favicon.ico"
		/>
		<b>compare</b>the<b>market</b>
	</a>
)
