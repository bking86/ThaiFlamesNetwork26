import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const { keywords, tone } = await request.json();

    if (!keywords || !tone) {
      return NextResponse.json(
        { error: "Keywords and tone are required" },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Create a captivating dating profile bio for a site called "Thai Flames".
      The person's key traits/interests: ${keywords}.
      The desired tone: ${tone}.
      Keep it under 150 words. Focus on being authentic and engaging.`,
    });

    const bio = response.text || "I'm a mystery waiting to be discovered.";

    return NextResponse.json({ bio });
  } catch (error) {
    console.error("Error generating bio:", error);
    return NextResponse.json(
      { error: "Failed to generate bio" },
      { status: 500 }
    );
  }
}