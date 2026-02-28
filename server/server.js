import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`App is running on http://localhost:${PORT}`);
});
