import userImg from '../assets/userimg.png'
import botImg from '../assets/botimg.png'

const ChatUI = () => {
    return(
        <div className="chats">
            <div className="chat user">
                <img className="chatImg" src={userImg} alt="" /><p className="txt">Tell me about calorie deficit diet.</p>
            </div>
            <div className="chat bot">
                <img className="chatImg" src={botImg} alt="" /><p className="txt">A calorie deficit diet is based on the principle of consuming fewer calories than your body needs to maintain its current weight. In other words, you burn more calories than you take in, which forces your body to use stored fat for energy. Over time, this leads to weight loss. </p>
            </div>
        </div>
    );
};

export default ChatUI;