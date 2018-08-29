import React from 'react'
import styles from './album.css'

export const albums = [	
	{
		band: '14th of May, Saturday',
		album: 'Killing Spree',
		date: '2018',
		link: 'https://soundcloud.com/hotkeymusic/sets/14th-of-may-saturday-killing',
		soundloud: '592466907',
		coverUrl: 'https://i1.sndcdn.com/artworks-000395151423-wzmk3g-t500x500.jpg',
		tracks: [
			'Killing Spree',
		],
		info: `Move fast`
	},
	{
		band: '14th of May, Saturday',
		album: 'Night Stalker',
		date: '2018',
		link: 'https://soundcloud.com/hotkeymusic/sets/14th-of-may-saturday-night',
		soundloud: '592463973',
		coverUrl: 'https://i1.sndcdn.com/artworks-000386732148-akdas0-t500x500.jpg',
		tracks: [
			'Night Stalker',
		],
		info: `Techo darkness`
	},
	{
		band: 'Бублики',
		album: 'Гаррисон | Батл',
		date: '2016',
		link: 'https://soundcloud.com/hotkeymusic/sets/bubliki-garrison-batl',
		soundloud: '265226497',
		coverUrl: 'https://i1.sndcdn.com/artworks-000186968347-b5ne0k-t500x500.jpg',
		tracks: [
			'Батл',
			'Гаррисон',
			'Проба',
		]
	},
	{
		band: 'Из Пэ',
		album: 'Гореть и Верить',
		date: '2015',
		link: 'https://soundcloud.com/hotkeymusic/sets/izp-to-burn-and-hope',
		soundloud: '184792551',
		coverUrl: 'https://i1.sndcdn.com/artworks-000142867603-k7z17o-t500x500.jpg',
		tracks: [
			'01 - Маленький Принц',
			'02 - Парад',
			'03 - Децибелы',
			'04 - Run, Baby, Run!',
			'05 - Мотылёк',
		]
	},
	{
		band: 'Чай с мёдом',
		album: 'Новогодние Надежды / Убежав на Закат',
		date: '2015',
		link: 'https://soundcloud.com/hotkeymusic/sets/chai-nadezhdy-ubezhav',
		soundloud: '260868318',
		coverUrl: 'https://i1.sndcdn.com/artworks-000186691319-7tfiqx-t500x500.jpg',
		tracks: [
			'Убежав на Закат',
			'Новогодние Надежды'
		]
	},
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
