# 🎓 StudyAI — AI Student Assistant

A modern, fully responsive AI-powered student assistant built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. It helps students with tutoring, note summarization, and quiz generation — completely free to run using OpenRouter's free AI models.

---

## ✨ Features

- 💬 **Chat Tutor** — Ask any academic question and get clear, friendly explanations
- 📄 **Note Summarizer** — Paste your study notes and get concise bullet-point summaries
- 🧠 **Quiz Generator** — Enter any topic and get 5 multiple-choice questions with answers
- 🎯 **Subject Selector** — Filter by subject (Math, Physics, History, CS, and more)
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🔄 **Model Fallback** — Automatically switches to another free model if one is rate-limited

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI API | OpenRouter (free models) |
| AI Models | Llama 3, Mistral 7B, Gemma 3 |
| Hosting | Vercel (free) |

---

## 📁 Project Structure

```
ai-student-assistant/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # Server-side API route (AI logic)
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   └── globals.css
├── components/
│   ├── Sidebar.tsx             # Navigation sidebar (responsive)
│   └── ChatWindow.tsx          # Chat UI with input and messages
├── types/
│   └── index.ts                # Shared TypeScript types
├── .env.local                  # API keys (never commit this!)
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- A free OpenRouter API key from [openrouter.ai](https://openrouter.ai)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ai-student-assistant.git
cd ai-student-assistant
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the **root directory**:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

> ⚠️ Never commit `.env.local` to GitHub. It is already listed in `.gitignore` by default.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Getting a Free API Key

1. Go to [openrouter.ai](https://openrouter.ai)
2. Sign up for a free account (no credit card required)
3. Navigate to **Keys** → **Create Key**
4. Copy the key and paste it into your `.env.local` file

---

## 🤖 Free AI Models Used

The app automatically tries these models in order, falling back if one is rate-limited:

| Model | Provider |
|---|---|
| `meta-llama/llama-3.3-8b-instruct:free` | Meta |
| `mistralai/mistral-7b-instruct:free` | Mistral AI |
| `google/gemma-3-12b-it:free` | Google |
| `qwen/qwen-2.5-7b-instruct:free` | Alibaba |

You can add or remove models in `app/api/chat/route.ts` under the `FREE_MODELS` array.

---

## 🌐 Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add your environment variable in Vercel dashboard:
   - Key: `OPENROUTER_API_KEY`
   - Value: your OpenRouter API key
4. Click **Deploy**

> After deploying, update the `HTTP-Referer` in `route.ts` from `http://localhost:3000` to your live Vercel URL.

---

## 📱 Responsive Design

| Screen | Sidebar Behavior |
|---|---|
| Mobile (`< 768px`) | Hidden by default, opens as a slide-in drawer |
| Tablet / Desktop (`≥ 768px`) | Always visible on the left |

---

## 🔧 Customization

### Add a new subject
In `components/ChatWindow.tsx`, add to the `SUBJECTS` array:
```typescript
const SUBJECTS = [
  "Mathematics",
  "Your New Subject", // add here
  ...
];
```

### Change the AI system prompt
In `app/api/chat/route.ts`, edit the `SYSTEM_PROMPTS` object:
```typescript
const SYSTEM_PROMPTS = {
  chat: "Your custom prompt here...",
  ...
};
```

### Add a new feature
1. Add the new feature type to `types/index.ts`
2. Add a new system prompt in `route.ts`
3. Add a new sidebar item in `components/Sidebar.tsx`
4. Add a placeholder in `components/ChatWindow.tsx`

---

## ⚠️ Common Issues

| Error | Fix |
|---|---|
| `429 Rate Limit` | All free models are busy — wait a moment and retry |
| `API key missing` | Check `.env.local` exists in root and restart dev server |
| `Module not found` | Run `npm install` again |
| Sidebar not showing | Make sure you restarted the dev server after changes |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Next.js](https://nextjs.org/) by Vercel
- [OpenRouter](https://openrouter.ai/) for free AI model access
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [Meta Llama](https://llama.meta.com/), [Mistral AI](https://mistral.ai/), [Google Gemma](https://ai.google.dev/gemma) for free AI models

---

> Built with ❤️ as a portfolio project | [Live Demo](https://your-app.vercel.app)