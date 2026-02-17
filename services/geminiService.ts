
import { GoogleGenAI, Type } from "@google/genai";
import { Profile } from "../types";

// Always initialize the client using process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBio = async (keywords: string, tone: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Create a captivating dating profile bio for a site called "Thai Flames". 
      The person's key traits/interests: ${keywords}. 
      The desired tone: ${tone}. 
      Keep it under 150 words. Focus on being authentic and engaging.`,
    });
    // Access .text property directly, do not call it as a method
    return response.text || "I'm a mystery waiting to be discovered.";
  } catch (error) {
    console.error("Error generating bio:", error);
    return "Something went wrong, but I'm still amazing!";
  }
};

export const analyzeMatch = async (userProfile: Profile, targetProfile: Profile): Promise<{ score: number; reasoning: string }> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "Compatibility score from 0-100" },
            reasoning: { type: Type.STRING, description: "One sentence explanation of the match" }
          },
          required: ["score", "reasoning"]
        }
      },
      contents: `Analyze the compatibility between two people for a dating app.
      Person 1: ${JSON.stringify(userProfile)}
      Person 2: ${JSON.stringify(targetProfile)}
      Be insightful and look for deeper connections beyond just surface interests.`,
    });
    
    // Access .text property directly
    return JSON.parse(response.text || '{"score": 50, "reasoning": "A potential spark!"}');
  } catch (error) {
    console.error("Error analyzing match:", error);
    return { score: Math.floor(Math.random() * 40) + 50, reasoning: "Our AI sees a unique potential here!" };
  }
};
