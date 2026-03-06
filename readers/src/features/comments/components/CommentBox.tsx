import style from "./styles/CommentBox.module.css";

export const CommentBox = () => {
  return (
    <section className={style.commentSection}>
      <h1>Leave a Comment</h1>
      <form className={style.form}>
        <div>
          <label htmlFor="comment"></label>
          <textarea name="comment" id="comment"></textarea>
        </div>
        <button type="submit">Publish</button>
      </form>
    </section>
  );
};
