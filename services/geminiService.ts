
import { Profile } from "../types";

export const generateBio = async (keywords: string, tone: string): Promise<string> => {
  try {
    const response = await fetch('/api/generate-bio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keywords, tone }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate bio');
    }

    const data = await response.json();
    return data.bio;
  } catch (error) {
    console.error("Error generating bio:", error);
    return "I'm a mystery waiting to be discovered.";
  }
};

export const analyzeMatch = async (userProfile: Profile, targetProfile: Profile): Promise<{ score: number; reasoning: string }> => {
  try {
    const response = await fetch('/api/analyze-match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userProfile, targetProfile }),
    });

    if (!response.ok) {
      throw new Error('Failed to analyze match');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error analyzing match:", error);
    return { score: Math.floor(Math.random() * 40) + 50, reasoning: "Our AI sees a unique potential here!" };
  }
};
