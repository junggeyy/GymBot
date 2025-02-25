import './App.css';
import dumbbellLogo from './assets/dumbbellLogo.png'
import homeLogo from './assets/home.png'
import newChat from './assets/newChat.png'
import send from './assets/send.png'
import git from './assets/git.png'

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

      </div>
    </div>
  );
}

export default App;
