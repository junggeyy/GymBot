import './App.css';
import LandingPage from "./components/LandingPage.jsx"; 
import SideBar from './components/SideBar.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [chatStarted, setChatStarted] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const apiURL = "https://gymbot-y796.onrender.com/";

    const handleSendMessage = (message) => {
        if (!chatStarted) setChatStarted(true);

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: message },
        ]);

        setLoading(true);

        fetch(`${apiURL}chat`, {
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
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const handleNewSession = () => {
      if (chatStarted){
        const confirmReset = window.confirm("Warning: Your chats will be cleared. Do you want to start a new session?");
        if (confirmReset) {
          setMessages([]);  
          setChatStarted(false);
        }
      }
    };

    useEffect(() => {
      const handleBeforeUnload = (event) => {
        if(chatStarted){
          event.preventDefault();
          event.returnValue = "Are you sure you want to leave? All chat data will be lost.";
        }
      };
  
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [chatStarted]);

    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible)
    };

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 900)
        // On desktop, always show sidebar
        if (window.innerWidth > 900) {
          setSidebarVisible(true)
        }
      }

      checkMobile()
  
      window.addEventListener("resize", checkMobile)
  
      return () => window.removeEventListener("resize", checkMobile)
    }, [])


  return (
    <div className={`App ${sidebarVisible && isMobile ?
     "sidebar-active" : ""}`}>
       <div className={`sidebar-container ${sidebarVisible ?
         "visible" : ""}`}>
        <SideBar
          handleSendMessage={handleSendMessage}
          handleNewSession={handleNewSession}
          toggleSidebar={toggleSidebar}
        />
      </div>

      <div className="main">
        <div className="mobile-menu-toggle">
          <button onClick={toggleSidebar} className="menu-button">
            ☰
          </button>
        </div>

        <LandingPage 
          messages={messages} 
          loading={loading} 
          chatStarted={chatStarted} 
          handleSendMessage={handleSendMessage}
        />
      </div>  
    </div>
  );
}

export default App;
