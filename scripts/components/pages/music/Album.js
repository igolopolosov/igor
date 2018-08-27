import React from 'react'
import styles from './album.css'

const albums = [
	{
		band: '2 a.m.',
		album: 'Creator / Weekend',
		date: '2014',
		link: 'https://soundcloud.com/hotkeymusic/sets/2-a-m-creator-weekend',
		coverUrl: 'https://i1.sndcdn.com/artworks-000186694391-co76nh-t500x500.jpg',
		tracks: [
			'Creator',
			'Weekend'
		]
	},
	{
		band: '2 a.m.',
		album: 'Verve',
		date: '2014',
		link: 'https://soundcloud.com/hotkeymusic/sets/2-a-m-verve',
		coverUrl: 'https://i1.sndcdn.com/artworks-000186694163-01cv6e-t500x500.jpg',
		tracks: [
			'Verve'
		]
	}
]

export const Album = ({
	band,
	album,
	date,
	link,
	coverUrl,
	rating,
	tracks
}) => (
	<div
		className={styles.album}
		key={album}
	>
		<a
			className={styles.info}
			target="_blank"
			href={link}
		>
			<h4>{band}</h4>
			<h5>{album}</h5>
			<h6>{date}</h6>
		</a>
		<img src={coverUrl} className={styles.coverUrl} />
	</div>
)

// {albums.map(album => <Album {...album} />)}
