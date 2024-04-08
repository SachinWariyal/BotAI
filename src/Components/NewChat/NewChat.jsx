import "./NewChat.css"
import logo from "../../assets/botAImainPic.png";
import pen from "../../assets/pen.png";
const NewChat = () => {
  return (
    <div>
        <button className='newChat'>
            <img src={logo} alt="" width={32} height={33.58}/>
            <span>New Chat</span>
            <img src={pen} alt="" />
        </button>
    </div>
  )
}

export default NewChat