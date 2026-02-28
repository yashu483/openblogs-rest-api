import dotenv from "dotenv";
dotenv.config();

import express from "express";
import jwt from "jsonwebtoken";
import path from "node:path";
import url from "node:url";

// imports for server side routes and modules

const app = express();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`App is running on http://localhost:${PORT}`);
});
