import axios from "axios";
import "dotenv/config";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const generateEmoji = async (text) => {
  try {
    if (!text.trim()) {
      console.error(`Provided text is empy`);
    }
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Give me a single emoji that best describes this text: ${text}`,
              },
            ],
          },
        ],
      }
    );

    return (
      response.data.candidates?.[0]?.content?.parts?.[0]?.text.trim() || "❓"
    );
  } catch (error) {
    console.error(`Error fetching from Gemini AI: ${error}`);
    return "❌";
  }
};

export { generateEmoji };
