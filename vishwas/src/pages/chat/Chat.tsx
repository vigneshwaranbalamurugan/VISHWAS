import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const db = getDatabase();
    const chatRef = ref(db, 'chats/chatId1');

    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      const messagesArray = Object.values(data.messages);
      setMessages(messagesArray);
    });
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const db = getDatabase();
      const chatRef = ref(db, 'chats/chatId1/messages');
      const newMessageRef = ref(chatRef);
      const newMessageData = {
        text: newMessage,
        timestamp: Date.now(),
      };
      push(newMessageRef, newMessageData);
      setNewMessage('');
    }
  };

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.timestamp}>
            {message.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chat