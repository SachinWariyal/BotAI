import NewChat from "../../Components/NewChat/NewChat";
import PastConversation from "../../Components/PastConversations/PastConversation";
import mainImg from "../../assets/botAImainPic.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="left-container">
          <NewChat />
          <PastConversation />
        </div>

        <div className="right-container">
          <div className="top-heading">BOT AI</div>
          <p className="subHeading">How Can I Help You Today?</p>
          <img src={mainImg} alt="" />
          <div className="grid-container">
            <div className="grid-item">
              <h1>Hi, What is the weather</h1>
              <h3>Get immediate AI generated response</h3>
            </div>
            <div className="grid-item">
              <h1>Hi, What is my location</h1>
              <h3>Get immediate AI generated response</h3>
            </div>
            <div className="grid-item">
              <h1>Hi, What is the temperature</h1>
              <h3>Get immediate AI generated response</h3>
            </div>
            <div className="grid-item">
              <h1>Hi, How are you</h1>
              <h3>Get immediate AI generated response</h3>
            </div>
          </div>
          <div className="input-area">
            <input type="text" className="chatbox" placeholder="Ask your question here..."/>
            <button className="btn" >Ask</button>
            <button className="btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
