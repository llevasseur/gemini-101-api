import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateEmoji = async (text) => {
  try {
    if (!text.trim()) {
      console.error(`Provided text is empy`);
    }
    const result = await model.generateContent(
      `Give me a single emoji that best describes this text: ${text}`
    );

    return result.response.text().trim() || "❓";
  } catch (error) {
    console.error(`Error fetching from Gemini AI: ${error}`);
    return "❌";
  }
};

export { generateEmoji };
