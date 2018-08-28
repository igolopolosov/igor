import React from 'react'
import styles from './album.css'

export const albums = [
	{
		band: 'сиг?',
		album: 'обогнавшие скорость!',
		date: '2015',
		link: 'https://soundcloud.com/hotkeymusic/sets/sig-speed',
		soundloud: '260868019',
		coverUrl: 'https://i1.sndcdn.com/artworks-000186691930-8flxpa-t500x500.jpg',
		tracks: [
			'обогнавшие скорость!'
		]
	},
	{
		band: 'Nothing Personal',
		album: 'Nothing Wasted',
		date: '2015',
		link: 'https://soundcloud.com/hotkeymusic/sets/nothing-personal-nothing-wasted',
		soundloud: '264803944',
		coverUrl: 'https://i1.sndcdn.com/artworks-000186700926-w0ar73-t500x500.jpg',
		tracks: [
			'My Birthday',
			`When I'm Falling`,
			'Nevermind'
		]
	},
	{
		band: '2 a.m.',
		album: 'Creator / Weekend',
		date: '2014',
		link: 'https://soundcloud.com/hotkeymusic/sets/2-a-m-creator-weekend',
		soundloud: '264798475',
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
		soundloud: '264798404',
		coverUrl: 'https://i1.sndcdn.com/artworks-000186694163-01cv6e-t500x500.jpg',
		tracks: [
			'Verve'
		]
	}
]

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
					<h4>{band}</h4>
					<h5>{album}</h5>
					<h6>{date}</h6>
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
