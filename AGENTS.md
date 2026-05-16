# 🎓 AI Student Assistant – Gemini Project Instructions

## Project Overview
Build a modern AI-powered Student Assistant web application that helps students study smarter, manage learning tasks, and improve productivity.

The app should act like a personal academic assistant capable of:
- Answering study-related questions
- Generating notes and summaries
- Explaining concepts simply
- Solving math/science problems step-by-step
- Creating quizzes and flashcards
- Managing study schedules
- Helping with assignments and coding

The UI should be clean, modern, responsive, and beginner-friendly.

---

# 🧠 Main Goal
Create a portfolio-level AI web application using:
- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend/API: Next.js API routes or FastAPI
- AI Model: Gemini API
- Authentication: Clerk or Firebase Auth
- Database: Supabase or Firebase
- File Uploads: PDF/Text/Image support
- Hosting: Vercel

---

# ⚙️ Core Features

## 1. AI Chat Assistant
Create a conversational chatbot interface where students can:
- Ask academic questions
- Get explanations in simple language
- Continue conversations with memory
- Receive markdown formatted answers

### Requirements
- Streaming AI responses
- Chat history
- Typing animation
- Mobile responsive
- Dark/Light mode

---

## 2. PDF & Notes Assistant
Allow students to upload:
- PDFs
- DOCX
- TXT files

The AI should:
- Summarize documents
- Extract key points
- Generate MCQs
- Answer questions from uploaded files

### Suggested Tools
- LangChain
- PDF parsing libraries
- Vector embeddings
- RAG architecture

---

## 3. Smart Study Planner
Students can:
- Add subjects
- Set goals
- Create schedules
- Track progress

### Features
- Daily task system
- Calendar integration
- Progress analytics
- Study streak tracking

---

## 4. AI Quiz Generator
Generate quizzes automatically from:
- User prompts
- Uploaded notes
- PDFs

### Quiz Types
- MCQs
- True/False
- Short Questions

### Additional Features
- Timer
- Score tracking
- Difficulty levels

---

## 5. Math & Science Solver
AI should solve:
- Algebra
- Calculus
- Physics
- Chemistry

### Requirements
- Step-by-step solutions
- Formula rendering
- Graph support
- Beginner-friendly explanations

Use:
- KaTeX or MathJax
- Markdown rendering

---

## 6. Coding Assistant
Students can:
- Ask programming questions
- Debug code
- Generate code snippets
- Learn web development concepts

Supported languages:
- Python
- JavaScript
- TypeScript
- C++
- HTML/CSS

---

# 🎨 UI/UX Requirements

## Design Style
- Modern SaaS UI
- Glassmorphism or minimal style
- Smooth animations
- Clean typography
- Responsive layout

## Pages
- Landing Page
- Dashboard
- Chat Interface
- Study Planner
- Quiz Section
- Settings
- Profile Page

## Suggested Libraries
- shadcn/ui
- Framer Motion
- Lucide Icons
- Tailwind CSS

---

# 🏗️ Suggested Folder Structure

/app
/components
/features
/lib
/hooks
/services
/context
/types
/styles
/public

---

# 🔐 Authentication
Implement secure login/signup using:
- Clerk
OR
- Firebase Authentication

Include:
- Google Sign In
- Email/password login
- Session management

---

# 🧩 AI Integration

## Gemini API
Use Gemini API for:
- Chat completion
- Summarization
- Question answering
- Quiz generation
- Study recommendations

### Important
- Use environment variables
- Never expose API keys
- Create reusable AI service functions

---

# 🚀 Advanced Features (Optional)

## Voice Assistant
- Speech-to-text
- Text-to-speech

## OCR Support
Extract text from images using:
- Tesseract OCR
- Gemini Vision

## AI Memory
Store previous conversations and preferences.

## Multi-language Support
Support English and Urdu.

---

# 📊 Analytics Dashboard
Show:
- Study hours
- Quiz performance
- Learning streaks
- Weekly progress

Use charts and progress bars.

---

# 🛠️ Recommended Tech Stack

## Frontend
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend
- Next.js API Routes
OR
- FastAPI

## Database
- Supabase
OR
- Firebase

## AI Tools
- Gemini API
- LangChain
- Vector Database

## Deployment
- Vercel

---

# 📱 Responsiveness
The application must work properly on:
- Mobile devices
- Tablets
- Desktop screens

---

# 🔥 Performance Requirements
- Fast loading
- Optimized API calls
- Lazy loading
- Error handling
- Skeleton loaders

---

# 🧪 Testing
Implement:
- Form validation
- API error handling
- Loading states
- Empty states

---

# 🧹 Code Quality Rules
- Use reusable components
- Use TypeScript types everywhere
- Keep clean folder structure
- Write modular code
- Follow best practices

---

# 📌 Important Development Rules

1. Keep UI clean and minimal.
2. Prioritize student productivity.
3. Make explanations beginner-friendly.
4. Ensure accessibility.
5. Avoid unnecessary complexity.
6. Use modern React practices.
7. Keep components reusable.
8. Add comments for complex logic.
9.use MCP server like context7 etc for resaerching on given tech.
---
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 🎯 Final Goal
Build a professional AI Student Assistant platform that:
- Looks modern
- Solves real student problems
- Demonstrates full-stack AI development skills
- Is strong enough for portfolio and internship applications

The final product should feel like a real SaaS application.
