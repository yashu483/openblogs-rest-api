import styles from "./Header.module.css";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <h1>OPENBLOGS</h1>
      <div
        className={clsx(
          styles.navSidebar,
          navOpen ? styles.open : styles.close,
        )}
      >
        <button
          className={clsx(styles.sidebarToggleBtn, styles.closeSidebarBtn)}
          onClick={handleClick}
        ></button>
        <nav className={styles.navigation}>
          <ul className={styles.navUL}>
            <div className={styles.sidebarTop}>
              <Link to="/posts">
                <li key="posts">Posts</li>
              </Link>
              <Link to="/login">
                <li key="login">Login</li>
              </Link>
              <Link to="/register">
                <li key="register">SignUp</li>
              </Link>
            </div>
            <li>Logout</li>
          </ul>
        </nav>
      </div>

      <button
        className={clsx(styles.openSidebarBtn, styles.sidebarToggleBtn)}
        onClick={handleClick}
      ></button>
    </header>
  );
};
