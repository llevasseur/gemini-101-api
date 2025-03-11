import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

import geminiRoutes from "./routes/gemini-routes.js";
app.use("/api/gemini", geminiRoutes);

app.get("/", (_req, res) => {
  res.send("Welcome to the Gemini101 API! 🤖");
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
