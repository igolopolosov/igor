import React from 'react'
import styles from './Stickers.less'

const langs = [
	['JS', styles.js, 'https://nodejs.org/'],
	['GO', styles.go, 'https://golang.org/'],
	['C#', styles.csharp, 'https://dotnet.microsoft.com/'],
	['TS', styles.ts, 'https://www.typescriptlang.org/'],
]

export const Stickers = () => (
	<div className={styles.main}>
		{
			langs.map(([name, style, link]) => (
				<a key={name} href={link} target='blank' className={style}>
					<span>{name}</span>
				</a>
			))
		}
	</div>
)
