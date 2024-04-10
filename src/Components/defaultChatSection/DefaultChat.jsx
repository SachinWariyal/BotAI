import mainImg from "../../assets/botAImainPic.png";
import "./DefaultChat.css"
// import Box from '@mui/material/Box';
import { Box } from '@mui/material';

const DefaultChat = () => {
  return (
    <Box component="section" sx={{ p: 2}} className="right-container">
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
            
          </Box>
  )
}

export default DefaultChat