import os
import google.generativeai as genai
from dotenv import load_dotenv

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

history = []
print("Gym Bot: Hey muscles, how can I help you?")

while True:
    user_input = input("You: ")
    chat_session = model.start_chat(
        history = history 
    )

    response = chat_session.send_message(user_input)
    model_response = response.text

    print(f"Gym Bot: {model_response}")
    print()

    history.append([{"role": "user", "parts": [user_input]}])
    history.append([{"role": "model", "parts": [model_response]}])
