import './App.css';
import dumbbellLogo from './assets/dumbbellLogo.png'
import homeLogo from './assets/home.png'
import newChat from './assets/newChat.png'
import send from './assets/send.png'
import git from './assets/git.png'
import sendB from './assets/send.svg'
import userImg from './assets/userimg.png'
import botImg from './assets/botimg.png'

function App() {

  const autoResize = (e) => {
    e.target.style.height = "40px"; // Reset height to prevent infinite growth
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSec">
          <div className="top"><img src={dumbbellLogo} alt= "Logo" className = "logo"/><span className= "brand">GymBot</span></div>
          <button className="midButton"><img src={newChat} alt="" className="addButton" />New Chat</button>
          <div className="bottom">
            <button className="questions"><img src={send} alt ="" className="send"/>Tell me about Calorie Deficit diet</button>
            <button className="questions"><img src={send} alt ="" className="send"/>What is the best workout split?</button>
          </div>
        </div>
        <div className="lowerSec">
          <div className="listItems"><img src={homeLogo} alt="" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={git} alt="" className="listItemsImg" />Follow Me</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat user">
            <img className="chatImg" src={userImg} alt="" /><p className="txt">Tell me about calorie deficit diet.</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={botImg} alt="" /><p className="txt">A calorie deficit diet is based on the principle of consuming fewer calories than your body needs to maintain its current weight. In other words, you burn more calories than you take in, which forces your body to use stored fat for energy. Over time, this leads to weight loss. </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <textarea 
              className="chatInput" 
              rows={1} 
              placeholder="Ask anything..." 
              onInput={(e) => autoResize(e)}
            ></textarea><button className="sendb"><img src={sendB} alt="send"/></button>
          </div>
          <p>Generative AI may produce inaccurate results. Always seek a professional for health advice!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
