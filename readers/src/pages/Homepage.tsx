import styles from "./styles/Homepage.module.css";
import heroImage from "@/assets/images/hero.svg";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.mainHeading}>
        Share your story on <span>OpenBlogs</span>
      </h1>
      <div className={styles.heroWrapper}>
        <img
          src={heroImage}
          alt="Hero image to display users browsing posts"
          aria-hidden="true"
        />
      </div>
      <p>
        A modern platform for writers and readers to share ideas, stories, and
        knowledge in a beautiful, engaging way.
      </p>
      <div className={styles.homepageButtons}>
        <Link to="/posts" className={styles.postsLink}>
          Explore Posts
        </Link>
        <a href="" className={styles.writerLink}>
          Write on our platform
        </a>
      </div>
    </div>
  );
};
