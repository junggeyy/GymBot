import userImg from '../assets/userimg.png'
import botImg from '../assets/botimg.png'
import {marked} from "marked";
import { useEffect, useRef } from "react"

const ChatUI = ({messages, loading}) => {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, loading])

    return(
        <div className="chats">
            {messages.map((chat, index) => (
                <div key={index} className={`chat ${chat.sender}`}>
                    <img className="chatImg" src={chat.sender === "user" ? userImg : botImg} alt="" />
                    {chat.sender === "bot" ? (
                        <p className="txt" dangerouslySetInnerHTML={{ __html: marked(chat.text) }}></p>
                    ) : (
                        <p className="txt">{chat.text}</p>
                    )}
                </div>
            ))}

            {loading && (
                <div className="bot-typing">
                    <p className="txt">
                        Bot is typing<span className="dot-one">.</span>
                        <span className="dot-two">.</span>
                        <span className="dot-three">.</span>
                    </p>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatUI;