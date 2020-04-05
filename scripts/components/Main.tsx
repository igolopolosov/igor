import * as React from "react";

import { Routes } from "./Routes";
import { ThemeToggle } from "./blocks/ThemeToggle";
import { Footer } from "./Footer";
import { Header } from "./Header";

const styles = require("./Main.less");

interface MainState {
  isFullScreen: boolean;
}

export class Main extends React.PureComponent<{}, MainState> {
  constructor(props) {
    super(props);

    this.state = {
      isFullScreen: false
    };
  }

  toggleFullScreen = () => {
    this.setState(state => ({
      isFullScreen: !state.isFullScreen
    }));
  };

  render() {
    const { isFullScreen } = this.state;
    const notFullScreen = !isFullScreen;

    return (
      <div className={styles.container}>
        {notFullScreen && <Header />}

        <div className={styles.fullScreen} onClick={this.toggleFullScreen}>
          {isFullScreen ? "+" : "="}
        </div>

        <main className={styles.content}>
          <Routes />
        </main>

        {notFullScreen && <Footer />}

        {notFullScreen && <ThemeToggle />}
      </div>
    );
  }
}
