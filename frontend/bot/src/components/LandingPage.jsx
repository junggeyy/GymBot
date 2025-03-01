import { useState } from "react";
import ChatUI from "./ChatUI";
import Footer from "./Footer.jsx";
import dumbbellLogo from '../assets/dumbbellLogo.png'

const GymBot = () => {
  const [chatStarted, setChatStarted] = useState(false);

  const [messages, setMessages] = useState([]); // Store chat history

    const handleSendMessage = (message) => {
        if (!chatStarted) setChatStarted(true); // Start chat when user sends first message

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: message },
        ]);

        fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: "test_user", message }),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from API:", data);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "bot", text: data.response },
            ]);
        })
        .catch((error) => {
            console.error("Error:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "bot", text: "Oops! Something went wrong. Try again!" },
            ]);
        });
    };

  return (
    <div className="container">
      {!chatStarted ? (
        <div className="landingPageWrapper">
            <div className="landingPage">
              <img src={dumbbellLogo} alt="logo" width={450} />
              <h1>Welcome to GymBot</h1>
              <p>Your AI-powered fitness assistant.<br></br> Ask me anything about workouts, nutrition, and fitness!</p>
            </div>
        </div>
      ):(
        <ChatUI messages={messages} />
      )}
      { <Footer onSendMessage={handleSendMessage}/>}
    </div>
  );
};

export default GymBot;
