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
          <div className="chat">
            <img className="chatImg" src={userImg} alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="chat">
            <img className="chatImg" src={botImg} alt="" /><p className="txt">Hey Muscles! What can I help you with? </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Ask anything'/><button className="sendb"><img src={sendB} alt="send" className=""/></button>
          </div>
          <p>Generative AI may produce inaccurate results. Always seek a professional for health advice!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
