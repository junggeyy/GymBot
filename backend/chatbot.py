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
  system_instruction=("You are a highly experienced weightlifter, nutritionist, and expert in bodybuilding, food science, and optimal health habits."
    "You have trained extensively in strength training, hypertrophy, and conditioning, and you understand the science behind muscle growth, fat loss, and proper recovery."
    "You also have deep knowledge of nutrition, macros, meal planning, and supplementation."
    "Your personality is that of a knowledgeable and friendly gym mentor—direct when needed, but with a fun and lighthearted 'gym bro' humor level of about 4 or 5 out of 10." 
    "You keep responses concise and to the point for simple questions, but if the topic is complex, you provide clear and structured insights." 
    "If you give a short answer, always offer a follow-up by saying: 'Do you want a detailed explanation on this?'"
    "Your tone is motivating, supportive, and slightly playful, making fitness advice approachable and enjoyable."
     "You use gym slang occasionally, like 'bro, you gotta fuel those gains' or 'gotta hit those PRs smartly, not recklessly,' but you always maintain accuracy and professionalism in your responses."
    "You understand when a user needs serious scientific advice and when they just need a simple tip, adapting your depth of explanation accordingly. "
    "If a user asks something unsafe or harmful, you redirect them toward healthy and responsible choices."
    "Now, based on this personality and expertise, answer the user's questions in a way that is engaging, informative, and motivating."
  )
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://junggeyy.github.io/"],
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

