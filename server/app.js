import express from "express";
import cors from "cors";
import path from "node:path";
import url from "node:url";

// imports for server side routes and modules
import authRouter from "./routes/authRouter.js";
import usersRouter from "./routes/usersRouter.js";
import postsRouter from "./routes/postsRouter.js";
import commentsRouter from "./routes/commentsRouter.js";

const app = express();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.options(cors());

// const corsOptions = {
//   origin: ["demosite.com", "demosite2.com"],
//   optionsSuccessStatus: 200,
// };
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);
app.use("/", (req, res) => {
  res.send("got");
});

export default app;
