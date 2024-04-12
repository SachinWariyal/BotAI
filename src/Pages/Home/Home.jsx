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
  const [messages, setMessages] = useState([
    {
      message: "Hi I am BOT AI",
      sender:  true,
    }
  ]);
  const [ chatHistory, setChatHistory] = useState([]);
  // const [showPastConversation, setShowPastConversation] = useState(false);
  // const [showDefault, setDefault] = useState(false);  
  const handleMessages = () => {
    const newMessages = [
      ...messages,
      { message : question, sender: 'user'},
      { message : response, sender: 'bot'},
    ];    
    setMessages(newMessages);
    setChatHistory([...chatHistory, { question, response }]);
  }


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
    handleMessages(question, response);
    setInputValue('');
    setShowChat(true);
  };

  const handleNewChat = (()=>{
    console.log("clicked")
    setShowChat(false);
    // setDefault(true);
  })

  const handlePastChats = (() => {
    setShowChat(false);
    // setShowPastConversation(true);
  })

  // const handlePastConversationClick = () => {
  //   setShowPastConversation(true);
  //   // Here you could fetch or set your chat history data
  //   // setChatHistory([...]); // Update chat history data
  // };

  return (
    <div>
      <div className="container">
        <div className="left-container">
          {/* {!showDefault ? <NewChat onClick={handleNewChat}/> : <DefaultChat/>} */}
          <NewChat onClick={handleNewChat}/>
          <PastConversation onClick={handlePastChats}  chatHistory={chatHistory} />
        </div>  
        {/*  &&  showDefault */}
        {/* <div className="right-side"> */}
        {/* {!showPastConversation && <PastConversation chatHistory={chatHistory} />} */}
        {showChat ? (
          //  response={ response } question={ question }
          <ChatBox messages={messages}/>
        ): (
          <DefaultChat/>
        )}

        {/* </div> */}
        <div className="input-area">
              <TextField style={{outline: 'none'}} fullWidth className="chatbox" id="outlined-basic" label="Ask your question here..." variant="outlined" value={inputValue} onChange={handleInputChange}/>
              {/* <input type="text" className="chatbox" placeholder="Ask your question here..." value={inputValue} onChange={handleInputChange}/> */}
              
              <ButtonBTN   text={"Ask"} onClick={handleAsk}/>
              <ButtonBTN  text={"Save"}  />
              {/* <button className="btn" onClick={handleAsk}>Ask</button>
              <button className="btn">Save</button> */}
            </div>

      </div>
    </div>
  );
};  

export default Home;
