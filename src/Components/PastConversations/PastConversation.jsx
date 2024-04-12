import "./PastConversation.css";
import PropTypes from 'prop-types';
const PastConversation = ({  chatHistory }) => {
  return (
    <div>
    <h2>Past Conversations</h2>
    <ul>
      {chatHistory.map((chat, index) => (
        <li key={index}>
          <strong>Question:</strong> {chat.question}<br />
          <strong>Response:</strong> {chat.response}
        </li>
      ))}
    </ul>
    {/* <button onClick={onClick}>Back to Current Chat</button> */}
  </div>
  )
}
PastConversation.propTypes = {
  onClick: PropTypes.func.isRequired,
  chatHistory: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      response: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PastConversation