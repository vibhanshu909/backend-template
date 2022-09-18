import express from "express";
import { auth } from "./auth/index.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use("/auth", auth);

app.use((req, res, next) => {
  res.status(404).send("Not Found!");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
