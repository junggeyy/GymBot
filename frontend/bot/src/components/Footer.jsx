import sendB from '../assets/send.svg'
const autoResize = (e) => {
    e.target.style.height = "40px"; 
    e.target.style.height = e.target.scrollHeight + "px";
};

const Footer = ({ onSendMessage}) => {
    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevent new line
            onSendMessage(); // Trigger chat start
        }
    };
    return(
        <div className="chatFooter">
            <div className="inp">
                <textarea 
                    className="chatInput" 
                    rows={1} 
                    placeholder="Ask anything..." 
                    onInput={(e) => autoResize(e)}
                ></textarea>
                <button className="sendb" onClick={onSendMessage}>
                    <img src={sendB} alt="send"/>
                </button>
            </div>
            <p>Generative AI may produce inaccurate results. Always seek a professional for health advice!</p>
        </div>
    );
};

export default Footer;