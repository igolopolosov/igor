import React from 'react'
import styles from './music.css'

// {albums.map(album => <Album {...album} />)}

const iframeSettings = {
	width: "100%",
	height: "300",
	scrolling: "no",
	frameBorder: "no",
	allow: "autoplay"
}

const scLink = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/264798475"
const sc1 = "&color=%23ff5500&auto_play=false&hide_related=false"
const sc2 = "&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"

export const Music = () => (
	<div className={styles.main}>
		<iframe
			{...iframeSettings}
			src={`${scLink}${sc1}${sc2}`}
		></iframe>
	</div>
)
