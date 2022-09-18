import express from "express";

export const auth = express.Router();

auth.get("/", (req, res) => {
  res.json({ hello: "world" });
});

auth.post("/signup", async (req, res) => {
  res.json({ success: true });
});

auth.post("/login", async (req, res) => {
  res.json({ success: true });
});
