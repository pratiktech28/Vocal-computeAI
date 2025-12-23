# Vocal-computeAI
# 🎙️ VocalCompute AI - Voice-First Intelligence

**VocalCompute AI** is a futuristic, low-latency voice assistant designed to bridge the gap between human intuition and artificial intelligence. Built for speed and empathy, it leverages the power of **Google Gemini 2.5 Flash** for lightning-fast reasoning and **ElevenLabs** for human-like conversational synthesis.

---

## 🚀 Key Features

* **⚡ Ultra-Low Latency:** Achieves sub-100ms response times by utilizing Gemini 2.5 Flash.
* **🗣️ Empathetic Voice AI:** Powered by ElevenLabs Conversational AI for natural, human-sounding interactions.
* **🧠 Context-Aware Memory:** Remembers user details (like family names and preferences) during the session to provide a personalized experience.
* **🌐 Zero-UI Design:** Focuses on voice interaction, making it accessible and intuitive for all users.

---

## 🛠️ Technical Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React + Vite + Tailwind CSS |
| **LLM (Reasoning)** | Google Gemini 2.5 Flash |
| **Voice Synthesis** | ElevenLabs Conversational AI Agent |
| **Deployment** | Vercel / GitHub |

---

## 📂 Project Structure

```text
├── src/
│   ├── pages/
│   │   └── Index.tsx      # Main logic & ElevenLabs Integration
│   ├── components/        # UI Elements (Navbar, Hero, AI Assistant)
├── public/                # Static assets and icons
├── index.html             # ElevenLabs widget script entry
├── tailwind.config.ts     # Futuristic UI configuration
└── package.json           # Project dependencies
