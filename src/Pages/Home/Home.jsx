import { useState } from "react";
import { TextField } from '@mui/material';

import NewChat from "../../Components/NewChat/NewChat";
import PastConversation from "../../Components/PastConversations/PastConversation";

import data  from "../../sampleData.json";
import "./Home.css";
import ChatBox from "../../Components/ChatBox/ChatBox";
import DefaultChat from "../../Components/defaultChatSection/DefaultChat";
import ButtonBTN from "../../Components/Button/Button";
const Home = () => {
  const [showChat, setShowChat] = useState(false);
  const [response, setResponse] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [question, setQuestion] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAsk = () => {
    // setShowChat(true);
    // console.log("true");
    const question = (inputValue.trim().toLowerCase());
    setQuestion(question);
    const foundQuestion = data.find(item => item.question.toLowerCase().includes(question));

    if(foundQuestion){
      setResponse(foundQuestion.response);
      setShowChat(true);
    }else{
      setResponse("Sorry, Coudnt find the response for this question")
      setShowChat(true);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="left-container">
          <NewChat />
          <PastConversation />
        </div>
        {showChat ? (
          <ChatBox response={ response } question={ question }/>
        ): (
          <DefaultChat/>
        )}


        <div className="input-area">
              <TextField fullWidth className="chatbox" id="outlined-basic" label="Ask your question here..." variant="outlined" value={inputValue} onChange={handleInputChange}/>
              {/* <input type="text" className="chatbox" placeholder="Ask your question here..." value={inputValue} onChange={handleInputChange}/> */}
              
              <ButtonBTN text={"Ask"} onClick={handleAsk}/>
              <ButtonBTN text={"Save"}  />
              {/* <button className="btn" onClick={handleAsk}>Ask</button>
              <button className="btn">Save</button> */}
            </div>

      </div>
    </div>
  );
};

export default Home;
