import "./NewChat.css"
import logo from "../../assets/botAImainPic.png";
import pen from "../../assets/pen.png";
import PropTypes from "prop-types";

const NewChat = ({ onClick }) => {
  return (
    <div>
        <button className='newChat' onClick={onClick}>
            <img src={logo} alt="" width={32} height={33.58}/>
            <span>New Chat</span>
            <img src={pen} alt="" />
        </button>
    </div>
  )
}

NewChat.propTypes = {
  onClick: PropTypes.func
}

export default NewChat;
