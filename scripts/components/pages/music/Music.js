import React from 'react'
import { Album } from './Album.js'
import { artists } from './artists'
import styles from './music.css'

export const Music = () => (
	<div className={styles.container}>
		{artists.map(albums =>
			<div className={styles.artist}>
				<div className={styles.artistName}>
					{albums[0].band}
				</div>
				<div className={styles.albums}>
					{albums.slice(1).map(
						album => <Album {...album} key={album.album} />
					)}
				</div>
			</div>
		)}
	</div>
)
