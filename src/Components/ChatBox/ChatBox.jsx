import { Box } from "@mui/material";
import PropTypes from "prop-types";
import "./ChatBox.css";
import userDP from "../../assets/usersDp.png";
import AIDP from "../../assets/botAImainPic.png";
import Clock from "../Clock/Clock";
// import Clock from "../Clock/Clock";
const ChatBox = ({ question, response }) => {
  return (
    <Box className="right-container">
      <div className="top-heading">Bot AI</div>
      <p className="subHeading"> How Can I help You</p>
      {/* <div className="question-container">
          <img src={userDP} alt="" width={65} height={69} />
          <div className="chat-details">
            <h2>You</h2>
            <p className='question'>{question}</p>
            <p className='time'>time</p>
          </div>
        </div> */}
      {/* <div className="response-container">
          <img src={AIDP} alt="" width={65} height={69}/>
          <div className="chat-details">
            <h2>BOT AI</h2>
            <p className='response'> {response}</p>
            <p className='time'>time</p>
          </div>
        </div> */}
      <Box component="section" sx={{ p: 2, border: "1px solid  grey" }} height={105} width={1015} my={4} display="flex" alignItems="center" borderRadius="10px">
      <img src={userDP} alt="" width={65} height={69} />
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mx={2}>
            <h2>You</h2>
            <p className='question'>{question}</p>
            <Clock/>
        </Box>
      </Box>
      <Box component="section" sx={{ p: 2, border: "1px solid  grey" }} height={105} width={1015} my={4} display="flex" alignItems="center" borderRadius="10px">
      <img src={AIDP} alt="" width={65} height={69}/>
        
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mx={2}>
          <h2>BOT AI</h2>
            <p className='response'> {response}</p>
            <Clock/>
        </Box>
      </Box>
    </Box>
  );
};
ChatBox.propTypes = {
  question: PropTypes.string.isRequired, // Require question prop of type string
  response: PropTypes.string.isRequired, // Require response prop of type string  
};
export default ChatBox;
