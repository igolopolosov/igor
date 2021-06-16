import React from "react";
import styles from "./appearences.less";

import { ActionLink } from '../../blocks/Link';

const linksToInteviews = [
  {
    url: 'https://www.youtube.com/watch?v=O9Cqz2v2XS4',
    description: 'Это Палех #23 гость программист Игорь Голополосов',
    date: '15-02-2020'
  },
  {
//     url: 'https://vk.com/golopolosov?w=wall-86709385_650',
    url: 'https://web.archive.org/web/20180429103113/http://www.obucharium.com/blog/34',
    description: 'Igor Golopolosov. Путь программиста: Палех(RU) - Лимассол(CYP) - Питерборо(UK)...',
    date: '09-04-2018'
  },
]

const linksToPodcasts = [
  {
    url: 'https://soundcloud.com/hotkeymusic/kings-of-frontend-svelte',
    description: '0.0.1 - Kings of Frontend - Svelte',
    date: '09-11-2019'
  },
]

const linksToMentions = [
  {
    url: 'https://chastnik.ru/news/kultura/gran-pri-festivalya-shkolnyy-rok-2014-poluchila-gruppa-holiday-iz-ivanovskogo-rayona-14-05-2015/',
    secondUrl: 'https://ivanovo.bezformata.com/listnews/rok-2014-proshel-v-ivanove/16841884/',
    description: '«Школьный рок-2014» Лучший барабанщик – Голополосов Игорь',
    date: '14-05-2015'
  },
  {
    url: 'https://www.isuct.ru/zh-hans/node/13294?language=zh-hans',
    secondUrl: 'http://main.isuct.ru/ru/node/7381',
    description: 'III (региональный) этап Всероссийской олимпиады школьников по химии',
    date: '02-02-2010'
  },
  {
    url: 'https://palech-school.ucoz.ru/index/nashi_luchshie_ucheniki/0-158',
    description: 'Наши лучшие ученики',
    date: 'x-x-2009',
  },
  {
    url: 'https://palech-school.ucoz.ru/index/0-82',
    description: 'ИТОГИ  РАЙОННЫХ  ПРЕДМЕТНЫХ ОЛИМПИАД',
    date: '17-12-2008',
  },
]

const AppearencesSection = ({ title, linksTo = [] }) => (
  <>
    <h2>{title}</h2>
    {linksTo.map(({ url, description }, index) => (
      <ActionLink
        key={index}
        href={url}
        className={styles.item}
      >
        &gt; {description}
      </ActionLink>
    ))}
  </>
)

export const Appearences = () => (
  <div className={styles.container}>
    <h1>Appearences</h1>
    <AppearencesSection title="Podcasts" linksTo={linksToPodcasts} />
    <AppearencesSection title="Interviews" linksTo={linksToInteviews} />
    <AppearencesSection title="Mentions" linksTo={linksToMentions} />
  </div>
);
