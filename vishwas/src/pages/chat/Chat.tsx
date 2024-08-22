import React, { useState } from 'react';

const Chat = () => {
  // Fake conversational data between Mahendra Singh Dhoni (Farmer) and Nesamani (Contractor)
  const initialMessages = [
    { id: 1, sender: 'Mahendra Singh Dhoni', text: 'Hello, I’m interested in the contract.', timestamp: '2024-08-21 10:00 AM' },
    { id: 2, sender: 'Nesamani', text: 'Hi! Sure, let’s discuss the details.', timestamp: '2024-08-21 10:05 AM' },
    { id: 3, sender: 'Mahendra Singh Dhoni', text: 'What are the terms and conditions?', timestamp: '2024-08-21 10:10 AM' },
    { id: 4, sender: 'Nesamani', text: 'You will get a fixed price for your produce.', timestamp: '2024-08-21 10:15 AM' },
    { id: 5, sender: 'Mahendra Singh Dhoni', text: 'Sounds good. How do we proceed?', timestamp: '2024-08-21 10:20 AM' },
    { id: 6, sender: 'Nesamani', text: 'I will send the contract over for your signature.', timestamp: '2024-08-21 10:25 AM' },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      const newMessageData = {
        id: messages.length + 1,
        sender: 'Mahendra Singh Dhoni', // This simulates that Mahendra Singh Dhoni is sending the message
        text: newMessage,
        timestamp: new Date().toLocaleString(),
      };
      setMessages([...messages, newMessageData]);
      setNewMessage(''); // Clear the input field
    }
  };

  return (
    <div className="chat-room bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-extrabold mb-4 text-center">Chat With :   Nesamani</h2>
      <div className="messages space-y-4 overflow-y-auto max-h-96">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message p-3 rounded-lg ${
              message.sender === 'Mahendra Singh Dhoni' ? 'bg-blue-100 text-left' : 'bg-green-100 text-right'
            }`}
          >
            <div className="text-sm text-gray-600">{message.sender}</div>
            <p className="text-md">{message.text}</p>
            <div className="text-xs text-gray-500">{message.timestamp}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-lg focus:outline-none"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
