import { generateEmojiService } from "../services/gemini-ai.js";

const geminiEmoji = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt.trim()) {
    res.status(404).send(`Prompt must be provided to generate emoji`);
  }
  try {
    const response = await generateEmojiService(prompt);
    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send(`Error posting request to generate an emoji with Gemini AI`);
    return;
  }
};

export { geminiEmoji };
