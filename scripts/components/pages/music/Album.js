import React from 'react'
import styles from './album.css'


const iframeSettings = {
	width: "100%",
	height: "300",
	scrolling: "no",
	frameBorder: "no",
	allow: "autoplay"
}

function getSouncloudIframeSrc(id) {
	const sc0 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/"
	const sc1 = "&color=%23ff5500&auto_play=false&hide_related=false"
	const sc2 = "&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"

	return `${sc0}${id}${sc1}${sc2}`
}

export class Album extends React.Component {

	constructor() {
		super()
		this.state = {
			isPlayerDisplayed: false
		}
	}

	onHover(nextState) {
		this.setState({ isPlayerDisplayed: nextState })
	}

	render() {
		const {
			band,
			album,
			date,
			link,
			soundloud,
			coverUrl,
			rating,
			tracks
		} = this.props
		const { isPlayerDisplayed } = this.state

		return (
			<div
				className={styles.album}
				onMouseEnter={() => this.onHover(true)}
				onMouseLeave={() => this.onHover(false)}
			>
				<img src={coverUrl} className={styles.coverUrl} />
				<a
					className={styles.info}
					style={{ display: isPlayerDisplayed && 'none' }}
					target="_blank"
					href={link}
				>
					<h5>{band}</h5>
					<h4>{album}</h4>
					<h6>{date.slice(-4)}</h6>
				</a>
				<iframe
					{...iframeSettings}
					className={styles.iframe}
					style={{ display: !isPlayerDisplayed && 'none' }}
					src={getSouncloudIframeSrc(soundloud)}
				/>
			</div>
		)
	}
}
