import React, {useState} from 'react'
import Avatar from "@material-ui/core/Avatar";
import './ChatScreen.css';

function ChatScreen() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Mark',
            image: '...',
            message: 'Whats up?'
        },
        {
            name: 'Mark',
            image: '...',
            message: 'How its going?'
        },
        {
            message: 'Whats up?'
        }   
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH MARK ON 08/08/2021</p>
            {messages.map((message, index) => (
                message.name ? (
                    <div key={index} className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image}/>
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div key={index} className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                
            ) )}
                <form className="chatScreen__input">
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text" 
                        placeholder="Type a message..."
                        className="chatScreen__inputField"
                        />
                    <button 
                        type="submit" className="chatScreen__inputButton"
                        onClick={handleSend}
                        >
                            SEND
                    </button>
                </form>
        </div>
    )
}

export default ChatScreen;
