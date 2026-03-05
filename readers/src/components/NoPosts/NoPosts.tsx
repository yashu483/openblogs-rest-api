import styles from "./NoPosts.module.css";
import notFoundImg from "@/assets/images/no-content.png";

export const NoPosts = () => {
  return (
    <div className={styles.container}>
      <img
        src={notFoundImg}
        alt="Image indicating there is no content to show"
      />
      <h2>No posts found!</h2>
      <p>Stay tuned! New stories will be published soon.</p>
    </div>
  );
};
