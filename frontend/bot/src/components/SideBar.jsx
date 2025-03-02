import dumbbellLogo from '../assets/dumbbellLogo.png'
import newChat from '../assets/newChat.png'
import send from '../assets/send.png'
import git from '../assets/git.png'
import linkedin from '../assets/linkedin.svg'

const SideBar = ({handleSendMessage, handleNewSession}) => {
    return(
        <div className="sidebar">
            <div className="upperSec">
                <div className="top"><img src={dumbbellLogo} alt= "Logo" className = "logo"/><span className= "brand">GymBot</span></div>
                <button className="midButton" onClick={handleNewSession}><img src={newChat} alt="" className="addButton" />New Session</button>
                <h3>Prompts to get started:</h3>
                <div className="bottom">
                    <button className="questions" onClick={() => handleSendMessage("Tell me about Calorie Deficit diet")}><img src={send} alt ="" className="send"/> Tell me about Calorie Deficit diet</button>
                    <button className="questions" onClick={() => handleSendMessage("What is the best workout split?")}><img src={send} alt ="" className="send"/> What is the best workout split?</button>
                    <button className="questions" onClick={() => handleSendMessage("Best bicep workouts")}><img src={send} alt ="" className="send"/> Best bicep workout for best pump</button>
                    <button className="questions" onClick={() => handleSendMessage("Challenge me with the hardest workouts")}><img src={send} alt ="" className="send"/>Challenge me with the hardest workouts</button>
                </div>
            </div>
            <div className="lowerSec">
                <div className="listItemHead">Contact Me</div>
                <div className="listItems"><img src={git} alt="" className="listItemsImg" /><a href="https://github.com/junggeyy">GitHub</a></div>
                <div className="listItems"><img src={linkedin} alt="" className="listItemsImg" /><a href="https://linkedin.com/in/vickeyjung">LinkedIn</a></div>
            </div>
      </div>
    );
};
export default SideBar;