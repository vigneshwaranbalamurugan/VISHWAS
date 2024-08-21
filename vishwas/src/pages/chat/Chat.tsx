import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue, push } from 'firebase/database';

interface ChatMessage {
  from: string;
  to: string;
  message: string;
}

const firebaseConfig = {
  // Your Firebase configuration
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Chat: React.FC = () => {
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);
  const [chatUserId, setChatUserId] = useState<string | null>(null);
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const chatInputRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUserId(user.uid);
      } else {
        // Redirect to login page
      }
    });
  }, []);

  useEffect(() => {
    if (loggedInUserId && chatUserId) {
      const chatRef = ref(db, `/chats`);
      onValue(chatRef, (snapshot) => {
        const data = snapshot.val() || {};
        const filteredChats = Object.values(data).filter((chat) =>
          (chat.from === loggedInUserId || chat.to === loggedInUserId) &&
          (chat.from === chatUserId || chat.to === chatUserId)
        );
        setChats(filteredChats);
      });
    }
  }, [loggedInUserId, chatUserId]);

  const handleNewChat = () => {
    const chat = chatInputRef.current?.value.trim();
    if (!chat) return;

    push(ref(db, '/chats'), {
      from: loggedInUserId!,
      to: chatUserId!,
      message: chat,
    });

    chatInputRef.current!.value = '';
  };

  const writeChatsOnScreen = (messages: ChatMessage[]) => {
    const chatElements = messages.map((message) => {
      const messageType = message.from === loggedInUserId ? 'sent' : 'reply';
      const bubbleClass = messageType === 'sent' ? 'from-message' : 'to-message';
      return (
        <li key={message.message} className={`chat-bubble-container__item ${messageType}`}>
          <p className={`chat-bubble ${bubbleClass}`}>{message.message}</p>
        </li>
      );
    });

    return <ul className="chat-bubble-container">{chatElements}</ul>;
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <div className="card bg-gray-100 shadow-md rounded">
        <div className="card-header text-center text-2xl font-bold py-4">
          <span className="float-end">
            <i className="fa fa-power-off text-gray-500 cursor-pointer" onClick={() => /* Handle Logout */}></i>
          </span>
          <span id="chatting_with"></span>
        </div>
        <div className="card-body overflow-y-auto h-[60vh] px-4 pb-4">
          {writeChatsOnScreen(chats)}
        </div>
        <div className="card-footer flex items-center py-4 px-4">
          <input
            ref={chatInputRef}
            type="text"
            className="flex-grow rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-sm"
            onClick={handleNewChat}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;