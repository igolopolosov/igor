import React from "react";
import styles from "./album.less";

import { ALink } from "../../blocks/ALink";

const iframeSettings = {
  width: "100%",
  height: "300",
  scrolling: "no",
  frameBorder: "no",
  allow: "autoplay"
};

function getSouncloudIframeSrc(id) {
  const sc0 =
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/";
  const sc1 = "&color=%23ff5500&auto_play=false&hide_related=false";
  const sc2 =
    "&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

  return `${sc0}${id}${sc1}${sc2}`;
}

export class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlayerDisplayed: false
    };
  }

  onHover(nextState) {
    this.setState({ isPlayerDisplayed: nextState });
  }

  render() {
    const { band, album, link, soundloudPlaylistId, coverUrl } = this.props;
    const { isPlayerDisplayed } = this.state;

    return (
      <div className={styles.container}>
        <div
          className={styles.preview}
          onMouseEnter={() => this.onHover(true)}
          onMouseLeave={() => this.onHover(false)}
        >
          <img src={coverUrl} alt={album} className={styles.coverUrl} />
          <ALink
            className={styles.info}
            style={{ display: isPlayerDisplayed && "none" }}
            href={link}
          />
          <iframe
            title={album}
            {...iframeSettings}
            className={styles.iframe}
            style={{ display: !isPlayerDisplayed && "none" }}
            src={getSouncloudIframeSrc(soundloudPlaylistId)}
          />
        </div>
        <div className={styles.album}>{album}</div>
        <div className={styles.band}>{band}</div>
      </div>
    );
  }
}
