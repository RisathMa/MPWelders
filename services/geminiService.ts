import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysisResponse, Language } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const analyzeProjectRequest = async (userDescription: string, language: Language = 'en'): Promise<AIAnalysisResponse | null> => {
  if (!ai) {
    console.warn("API Key is missing. AI features disabled.");
    return null;
  }

  try {
    const model = ai.models;

    const systemInstruction = `You are an expert Welding Consultant for "MP Welders" in Sri Lanka.
    Your goal is to analyze a potential client's project description and provide a structured technical summary to help them understand the scope before they call.
    
    Analyze the request for:
    1. A professional summary of the work required.
    2. Estimated complexity (Low, Medium, High).
    3. Suggested materials relevant to the Sri Lankan market (e.g., Galvanized Iron (GI) Box bars, Tor Steel, Amano roofing sheets, Stainless Steel 304).
    4. Three critical technical questions the welder needs to ask the client to give an accurate quote.
    
    ${language === 'si' 
      ? 'IMPORTANT: Provide the "summary", "suggestedMaterials", and "recommendedQuestions" fields in SINHALA language. Keep "estimatedComplexity" in English (Low/Medium/High) or Sinhala equivalent if preferred.' 
      : 'Provide the response in English.'}
    
    Be concise, professional, and simple to understand for a general homeowner.`;

    const response = await model.generateContent({
      model: "gemini-2.5-flash",
      contents: `User Project Description: "${userDescription}"`,
      config: {
        systemInstruction: systemInstruction,
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