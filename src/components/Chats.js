import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Whats up"
                timestamp="40 seconds ago"
                profilePic="..." 
            />
            <Chat
                name="Sarah"
                message="Hello"
                timestamp="30 minutes ago"
                profilePic="..." 
            />
            <Chat
                name="Jessika"
                message="Hi there"
                timestamp="2 days ago"
                profilePic="..." 
            />
            <Chat
                name="Natalie"
                message="Ola!"
                timestamp="1 week ago"
                profilePic="..." 
            />
        </div>
    )
}

export default Chats;

