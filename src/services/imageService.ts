import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateImageDescription(base64Image: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        parts: [
          { text: "Describe this image in detail for a high-quality Unsplash search query. Focus on the bathtub, the materials, the lighting, and the overall aesthetic." },
          { inlineData: { mimeType: "image/png", data: base64Image } }
        ]
      }
    ]
  });
  return response.text;
}
