import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysisResponse } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const analyzeProjectRequest = async (userDescription: string): Promise<AIAnalysisResponse | null> => {
  if (!ai) {
    console.warn("API Key is missing. AI features disabled.");
    return null;
  }

  try {
    const model = ai.models;

    const response = await model.generateContent({
      model: "gemini-2.5-flash",
      contents: `User Project Description: "${userDescription}"`,
      config: {
        systemInstruction: `You are an expert Welding Consultant for "MP Welders" in Sri Lanka.
        Your goal is to analyze a potential client's project description and provide a structured technical summary to help them understand the scope before they call.
        
        Analyze the request for:
        1. A professional summary of the work required (e.g., Gate fabrication, Roof repair, Grill installation).
        2. Estimated complexity (Low, Medium, High).
        3. Suggested materials relevant to the Sri Lankan market (e.g., Galvanized Iron (GI) Box bars, Tor Steel, Amano roofing sheets, Stainless Steel 304).
        4. Three critical technical questions the welder needs to ask the client to give an accurate quote (e.g., "Is electricity available on site?", "What is the approximate width of the gate?").
        
        Be concise, professional, and simple to understand for a general homeowner.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            estimatedComplexity: { type: Type.STRING, enum: ["Low", "Medium", "High"] },
            suggestedMaterials: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            recommendedQuestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["summary", "estimatedComplexity", "suggestedMaterials", "recommendedQuestions"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AIAnalysisResponse;
    }
    return null;

  } catch (error) {
    console.error("Error analyzing project:", error);
    return null;
  }
};