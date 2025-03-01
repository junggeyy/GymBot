import sendB from '../assets/send.svg'
import {useState} from "react";

const autoResize = (e) => {
    e.target.style.height = "40px"; 
    e.target.style.height = e.target.scrollHeight + "px";
};

const Footer = ({ onSendMessage}) => {

    const [message, setMessage] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    const sendMessage = () => {
        if(message.trim() === "")    return; // ignore empty message
        onSendMessage(message);
        setMessage("")
    };

    return(
        <div className="chatFooter">
            <div className="inp">
                <textarea 
                    className="chatInput" 
                    rows={1} 
                    placeholder="Ask anything..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onInput={autoResize}
                ></textarea>
                <button className="sendb" onClick={sendMessage}>
                    <img src={sendB} alt="send"/>
                </button>
            </div>
            <p>Generative AI may produce inaccurate results. Always seek a professional for health advice!</p>
        </div>
    );
};

export default Footer;