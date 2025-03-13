import { GoogleGenerativeAI } from "@google/generative-ai";
import { isValidEmoji, makeOneEmoji } from "./emoji.js";
import "dotenv/config";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateEmojiService = async (text) => {
  try {
    if (!text.trim()) {
      throw new Error("Provided text is empty");
    }
    const result = await model.generateContent(
      `Give me a single emoji that best describes this text: ${text}`
    );

    let emoji = result.response.text().trim() || "❓";
    console.log(emoji);
    if (!isValidEmoji(emoji)) {
      emoji = makeOneEmoji(emoji);
      if (!isValidEmoji(emoji)) {
        emoji = "😡";
      }
    }

    return emoji;
  } catch (error) {
    console.log(`Cannot fetch from Gemini AI. ${error}`);
    return error.status;
  }
};

export { generateEmojiService };
