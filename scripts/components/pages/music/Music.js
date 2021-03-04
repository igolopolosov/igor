import React from "react";
import { Album } from "./Album";
import { artists } from "./artists";
import styles from "./music.less";

export const Music = () => (
  <div className={styles.container}>
    {artists.map(([artist, ...albums]) => (
      <div className={styles.artist} key={artist.title}>
        <div className={styles.artistHeading}>
          <span className={styles.artistTitle}>{artist.title}</span>
          <span className={styles.artistStyle}>{artist.style}</span>
        </div>
        <div className={styles.albums}>
          {albums.map(album => (
            <Album {...album} key={album.album} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
