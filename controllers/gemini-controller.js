import { generateEmojiService } from "../services/gemini-ai.js";

const geminiEmoji = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt.trim()) {
    res.status(400).send(`Prompt must be provided to generate emoji`);
    return;
  }
  try {
    const response = await generateEmojiService(prompt);
    if (response === "❌") {
      res.status(400).send(`Bad request`);
    }
    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send(`Error posting request to generate an emoji with Gemini AI`);
    return;
  }
};

export { geminiEmoji };
