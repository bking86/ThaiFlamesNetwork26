import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { Profile } from "../../../types";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const { userProfile, targetProfile } = await request.json();

    if (!userProfile || !targetProfile) {
      return NextResponse.json(
        { error: "Both userProfile and targetProfile are required" },
        { status: 400 }
      );
    }

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

    const result = JSON.parse(response.text || '{"score": 50, "reasoning": "A potential spark!"}');

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error analyzing match:", error);
    return NextResponse.json(
      {
        score: Math.floor(Math.random() * 40) + 50,
        reasoning: "Our AI sees a unique potential here!"
      },
      { status: 500 }
    );
  }
}