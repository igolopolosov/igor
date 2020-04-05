import React from "react";
import styles from "./appearences.less";

import { ALink } from '../../blocks/ALink';

const linksToAppearences = [
  {
    url: 'http://obucharium.com/blog/34',
    description: 'Igor Golopolosov. Путь программиста: Палех(RU) - Лимассол(CYP) - Питерборо(UK)...',
    date: '09-04-2018'
  },
  {
    description: '«Школьный рок-2014» Лучший барабанщик – Голополосов Игорь',
    url: 'https://chastnik.ru/news/kultura/gran-pri-festivalya-shkolnyy-rok-2014-poluchila-gruppa-holiday-iz-ivanovskogo-rayona-14-05-2015/',
    date: '14-05-2015'
  }
]

export const Appearences = () => (
  <div className={styles.container}>
    {linksToAppearences.map(({ url, description }, index) => (
      <ALink
        key={index}
        href={url}
      >
        {description}
      </ALink>
    ))}
  </div>
);
