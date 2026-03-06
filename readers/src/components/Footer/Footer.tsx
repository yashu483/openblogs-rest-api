import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.githubLink}>
        <a
          href="/"
          rel="noopener"
          target="_blank"
          className={styles.github}
        ></a>
        Developed by{" "}
        <a href="" rel="noopener" target="_blank">
          Yashu Lilhare
        </a>
      </p>
      <p>
        @ 2026 <b>Crafts of Expression.</b> All rights reserved.
      </p>
    </footer>
  );
};
