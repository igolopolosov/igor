import React from 'react'
import {Album, albums} from './Album.js'
import styles from './music.css'

export const Music = () => (
	<div className={styles.main}>
		{albums.map(album => <Album {...album} key={album.album} />)}
	</div>
)
