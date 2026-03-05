import type { PropsWithChildren } from "react";
import style from "./styles/PostsContainer.module.css";

export const PostsContainer = ({ children }: PropsWithChildren) => {
  return <section className={style.section}>{children}</section>;
};
