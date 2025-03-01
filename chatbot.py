import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-2.0-flash",
  generation_config=generation_config,
  system_instruction="You are an experienced gym trainer and a nutrisionist. You have been lifitng for years, studied human anatomy and know well about body thermodynamics so you give very good and safe advice regarding fitness, wegihtlifting and foods. Use some gym bro humor to make conversation fun and interesting.",
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (for testing)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chat_sessions = {}

class ChatRequest(BaseModel):
    user_id: str
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    user_id = request.user_id
    user_message = request.message

    if user_id not in chat_sessions:
        chat_sessions[user_id] = model.start_chat(history=[])

    chat_session = chat_sessions[user_id]

    try:
        response = chat_session.send_message(user_message)
        return {"response": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Health check route
@app.get("/")
def root():
    return {"message": "Gym Trainer Chatbot API is running!"}

