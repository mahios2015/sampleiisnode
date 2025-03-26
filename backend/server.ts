
import app from "./src/app";
import dotenv from "dotenv";
import express from "express";
import path from "path";
dotenv.config();

const PORT = process.env.PORT || 3000;
// Serve static React files
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
