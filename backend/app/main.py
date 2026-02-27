from fastapi import FastAPI
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(title="AI Vision Agent Pro", version="1.0.0")

# CORS setup
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from .api.v1_routes import router as v1_router
app.include_router(v1_router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "AI Vision Agent Pro API is running"}
