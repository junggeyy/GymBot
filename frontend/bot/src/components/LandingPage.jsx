import ChatUI from "./ChatUI";
import Footer from "./Footer.jsx";
import dumbbellLogo from '../assets/dumbbellLogo.png'

const GymBot = ({messages, chatStarted, handleSendMessage}) => {
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
