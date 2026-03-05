import styles from "./styles/Posts.module.css";
import { PostsContainer } from "@/features/posts/components/PostsContainer";
import { PostCard } from "@/features/posts/components/PostCard";

export const Posts = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.mainHeading}>Explore Amazing Stories</h1>
      <p className={styles.description}>
        Discover thought-provoking articles from our community of writers
      </p>
      <div className={styles.searchBar}>
        <input type="search" placeholder="Search by title..." required />
        <button>search</button>
      </div>
      <div className={styles.filterBy}>
        <label htmlFor="filterPosts">Filter By:</label>
        <select name="filter" id="filterPosts">
          <option value="latest" selected>
            Latest
          </option>
          <option value="oldest">Oldest</option>
          <option value="updated">Recently Updated</option>
        </select>
        <button>Apply</button>
      </div>
      <PostsContainer>
        <PostCard />
        <PostCard />
      </PostsContainer>
    </div>
  );
};
