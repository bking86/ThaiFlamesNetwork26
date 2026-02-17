
import { GoogleGenAI, Type } from "@google/genai";
import { Profile } from "../types";

/**
 * Initialize the Google GenAI client.
 * In production (Vercel), ensure API_KEY is set in the environment variables.
 */
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined in the environment variables.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateBio = async (keywords: string, tone: string): Promise<string> => {
  const ai = getAiClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Create a captivating dating profile bio.
      Keywords: ${keywords}.
      Tone: ${tone}.
      Format: Narrative, authentic, under 150 words. Focus on values and lifestyle.`,
      config: {
        systemInstruction: "You are a high-end matchmaker for Thai Flames Network, focused on heritage and excellence.",
      },
    });
    return response.text?.trim() || "A journey of excellence begins with a single connection.";
  } catch (error) {
    console.error("Gemini Bio Generation Error:", error);
    return "Refining my narrative to match the caliber of this network.";
  }
};

export const analyzeMatch = async (userProfile: Profile, targetProfile: Profile): Promise<{ score: number; reasoning: string }> => {
  const ai = getAiClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "Synergy score from 0-100" },
            reasoning: { type: Type.STRING, description: "Concise analysis of value alignment" }
          },
          required: ["score", "reasoning"]
        }
      },
      contents: `Analyze partnership synergy for:
      Member A: ${JSON.stringify(userProfile)}
      Member B: ${JSON.stringify(targetProfile)}
      Focus on value architecture and cultural alignment.`,
    });
    
    const text = response.text || '{"score": 75, "reasoning": "A promising architectural alignment of values."}';
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Match Analysis Error:", error);
    return { score: 70, reasoning: "Our protocols detect significant potential in this cultural alignment." };
  }
};
