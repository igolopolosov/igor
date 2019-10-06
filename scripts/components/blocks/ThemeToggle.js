import React, { useState, useEffect } from "react";
import styles from "./ThemeToggle.less";
import themeStyles from "../../../styles/theme.less";

const pickTheme = isDayTheme => {
  return isDayTheme ? "light" : "dark";
};

export const ThemeToggle = () => {
  const now = new Date();
  const isDayTime = now.getHours() >= 6 && now.getHours() <= 20;
  const initialTheme = pickTheme(isDayTime);
  const [themeName, setTheme] = useState(
    localStorage.themeName || initialTheme
  );

  useEffect(() => {
    const initialThemeStyles = themeStyles[themeName];
    document.body.classList.toggle(initialThemeStyles);
  }, []);

  const toggle = () => {
    const newThemeName = themeName === "light" ? "dark" : "light";
    setTheme(newThemeName);
    localStorage.themeName = newThemeName;
    document.body.classList.toggle(themeStyles.dark);
    document.body.classList.toggle(themeStyles.light);
  };
  const toggleClassName =
    themeName === "light" ? styles.toggleBarDay : styles.toggleBarNight;
  return (
    <div className={styles.container} onClick={toggle}>
      <span role="img" aria-label="sun">☀️</span>
      <div className={toggleClassName}>
        <div className={styles.toggleCircle} />
      </div>
      <span role="img" aria-label="moon">🌙</span>
    </div>
  );
};
