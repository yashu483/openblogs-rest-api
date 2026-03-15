import express from "express";
import cors from "cors";
import path from "node:path";
import url from "node:url";

// imports for routes, utility functions, etc
import authRouter from "./routes/authRouter.js";
import usersRouter from "./routes/usersRouter.js";
import postsRouter from "./routes/postsRouter.js";
import commentsRouter from "./routes/commentsRouter.js";
import globalErrorHandler from "./errors/globalErrorHandler.js";

const app = express();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

// global error handler
app.use("/", globalErrorHandler);

export default app;
