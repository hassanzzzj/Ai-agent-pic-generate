# 🎨 AI Vision Agent Pro

**Professional-grade Agentic Image Generation Platform**

Powered by LangGraph, SiliconFlow, and Langfuse.

---

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- SiliconFlow API Key

### Installation

1. **Clone the repository** (if not already done)
```bash
git clone <repo_url>
cd ai-vision-agent-pro
```

2. **Configure environment**
Create `backend/.env` based on `backend/.env` (it should be already there) and add your keys:
```env
SILICONFLOW_API_KEY=your_key_here
LANGFUSE_ENABLED=true # Optional
LANGFUSE_PUBLIC_KEY=...
LANGFUSE_SECRET_KEY=...
```

3. **Launch with Docker**
```bash
docker-compose up --build
```
This will start:
- Frontend at http://localhost:5173
- Backend at http://localhost:8000

---

## 🏗️ Architecture

- **Backend**: FastAPI app serving LangGraph agent.
- **Agent**: 3-node graph (Planner -> Generator -> Critic).
- **Frontend**: React + Vite + Tailwind CSS.

## 🛠️ Development

If you want to run locally without Docker:

**Backend**:
```bash
cd backend
python -m venv venv
source venv/bin/activate # or venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend**:
```bash
cd frontend
npm install
npm run dev
```