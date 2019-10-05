import React from 'react'
import { Album } from './Album.js'
import { artists } from './artists'
import styles from './music.less'

export const Music = () => (
	<div className={styles.container}>
		{artists.map(([artist, ...albums]) =>
			<div className={styles.artist} key={artist.band}>
				<div className={styles.artistName}>
					{artist.band}
				</div>
				<div className={styles.albums}>
					{albums.map(
						album => <Album {...album} key={album.album} />
					)}
				</div>
			</div>
		)}
	</div>
)
