// import { Box } from "@mui/material";
import PropTypes from "prop-types";
import "./ChatBox.css";
import userDP from "../../assets/usersDp.png";
import AIDP from "../../assets/botAImainPic.png";
import Clock from "../Clock/Clock";
// import Clock from "../Clock/Clock";
const ChatBox = ({ messages }) => {
  return (
    <div className="main">
      <div className="top-heading">Bot AI</div>
      <p className="subHeading"> How Can I help You</p>
      <div className="chats">
      {messages.map((message, index) => (
        // component="section" sx={{ p: 2, border: "1px solid  grey" }} height={105} width={1015} my={4} display="flex" alignItems="center" borderRadius="10px"
        <div key={index} >
        <img src={messages.sender==='user'? userDP : AIDP} alt="" width={65} height={69} />
        {/* display="flex" justifyContent="center" alignItems="center" flexDirection="column" mx={2} */}
        <div className="chat" >
          <h2>{messages.sender === "user"? 'YOu' : 'Bot AI'}</h2>
          <p className="message">{message.message}</p>
          <Clock/>
        </div>
      </div>
      ))} 
      </div> 
    </div>
  );
};
ChatBox.propTypes = {
  // question: PropTypes.string.isRequired, // Require question prop of type string
  // response: PropTypes.string.isRequired, // Require response prop of type string  
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      sender: PropTypes.oneOf(['user', 'bot']).isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ChatBox;
