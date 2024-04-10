
import PropTypes from 'prop-types';
import ButtonBTN from '../../Components/Button/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';

const ComponentHandlingQuestionSubmission = ({ handleReceiveMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAsk = () => {
    const question = inputValue.trim().toLowerCase();
    // Simulate receiving response for the question
    const response = `Response to "${question}"`; // Replace this with actual logic to fetch response

    // Call handleReceiveMessage function to add question and response to messages
    handleReceiveMessage(question, response);

    // Clear input field after submitting question
    setInputValue('');
  };

  return (
    <div className="input-area">
      <TextField fullWidth className="chatbox" id="outlined-basic" label="Ask your question here..." variant="outlined" value={inputValue} onChange={handleInputChange} />
      <ButtonBTN text={"Ask"} onClick={handleAsk} />
      {/* You can add additional logic or components here if needed */}
    </div>
  );
};

ComponentHandlingQuestionSubmission.propTypes = {
  handleReceiveMessage: PropTypes.func.isRequired,
};

export default ComponentHandlingQuestionSubmission;
