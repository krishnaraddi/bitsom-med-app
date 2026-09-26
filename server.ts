import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "2mb" }));

// Server-side Gemini API endpoint for live HealGoa AI Agent execution
app.post("/api/agent-consult", async (req, res) => {
  const { agentName, agentRole, patientCase, language, customQuery } = req.body;

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY not configured; using deterministic clinical-agent engine.");
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const prompt = `You are the "${agentName}" (${agentRole}) inside the "HealGoa AI" Integrated Medical Tourism & AYUSH Ecosystem in Goa, India (supporting the Government of India's "Heal in India" initiative).
Target Language for Patient Summary: ${language || "English"}.

Patient Scenario / Query:
${customQuery || patientCase}

Provide a structured, clinical-grade agent execution output in JSON format containing:
1. clinicalAssessment: Detailed analysis from your specific agent domain combining modern medicine and AYUSH/tourism coordination where applicable.
2. decisionTrace: Array of 3 concrete decision logic steps executed by the agent.
3. recommendedActionPlan: Concrete next actions, Goa facility/resort/hospital routing, and estimated timeline/cost metrics.
4. translatedPatientSummary: A warm, clear patient-facing summary translated directly into ${language || "English"}.
5. escalationCheck: Whether human specialist or regulatory escalation is triggered and why.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            clinicalAssessment: { type: Type.STRING },
            decisionTrace: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            recommendedActionPlan: { type: Type.STRING },
            translatedPatientSummary: { type: Type.STRING },
            escalationCheck: { type: Type.STRING },
          },
          required: [
            "clinicalAssessment",
            "decisionTrace",
            "recommendedActionPlan",
            "translatedPatientSummary",
            "escalationCheck",
          ],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty model output");
    }

    const parsed = JSON.parse(text);
    return res.json({ source: "vertex-gemini-live", data: parsed });
  } catch (err: any) {
    // Return structured error so frontend can use its rich domain simulation engine seamlessly
    return res.status(200).json({
      source: "deterministic-agent-engine",
      fallbackReason: err?.message || "Using local clinical-agent execution engine",
      data: null,
    });
  }
});

// Firebase-powered Gemini Chatbot endpoint
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
      httpOptions: { headers: { "User-Agent": "aistudio-build" } },
    });

    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      history: history.map((h: any) => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message });
    return res.json({ text: result.text });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`HealGoa AI Platform Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
