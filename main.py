from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from google.generativeai import GenerativeModel

# Configure Gemini API (replace with your API key)
genai.configure(api_key="AIzaSyDkAfPr2MhxSVfHE39ZDfPUzSiIq7Bktbo")
model = GenerativeModel("gemini-1.5-flash")  # Replace with your preferred Gemini model version

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

async def get_ai_quote() -> str:
    try:
        prompt = "Generate a witty and humorous quote about everyday life."
        response = model.generate_text(prompt=prompt)
        return response.text.strip()
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail="Failed to generate quote")

@app.get("/generate-quote")
async def generate_quote():
    quote = await get_ai_quote()
    return {"quote": quote}