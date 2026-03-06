import style from "./styles/Post.module.css";

import { PostContentSection } from "@/features/posts/components/PostContentSection";
import { CommentBox } from "@/features/comments/components/CommentBox";

export const Post = () => {
  return (
    <div className={style.main}>
      <div className={style.mainContainer}>
        <PostContentSection />
        <CommentBox />
      </div>
    </div>
  );
};
