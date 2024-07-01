import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect('/'); // Connect to WebSocket server

        socketRef.current.on('chat message', (msg) => {
            setMessages([...messages, msg]);
        });

        return () => {
            socketRef.current.disconnect(); // Clean up on component unmount
        };
    }, [messages]);

    const handleSendMessage = () => {
        if (messageInput.trim() !== '') {
            socketRef.current.emit('chat message', messageInput); // Emit message event
            setMessageInput('');
        }
    };

    return (
        <div>
            <h2>Real-time Chat</h2>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chat;
