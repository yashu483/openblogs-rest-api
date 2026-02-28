import dotenv from "dotenv";
dotenv.config();

import express from "express";
import jwt from "jsonwebtoken";
import path from "node:path";
import url from "node:url";

// imports for server side routes and modules

const app = express();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

export default app;
