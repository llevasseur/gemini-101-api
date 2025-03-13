import { generateEmojiService } from "../services/gemini-ai.js";
import { isValidEmoji } from "../services/emoji.js";
const geminiEmoji = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt.trim()) {
    res.status(400).send(`Prompt must be provided to generate emoji`);
    return;
  }
  try {
    const response = await generateEmojiService(prompt);
    if (typeof response === "number") {
      res.status(response).send(`Error`);
      return;
    }
    if (!isValidEmoji(response)) {
      res.status(400).send(`Bad request`);
      return;
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
