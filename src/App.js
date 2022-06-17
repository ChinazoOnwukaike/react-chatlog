import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  //state
  const [messageData, setMessageData] = useState(chatMessages);
  let [totalLikes, setTotalLikes] = useState(0);
  const [likeButton, setLikeButton] = useState('🤍');

  const updateMessageData = (updatedMessage) => {
    const messages = messageData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setMessageData(messages);
    // console.log(messages);
  };

  const updateTotalLikes = (bool) => {
    bool ? setTotalLikes((totalLikes += 1)) : setTotalLikes((totalLikes -= 1));
  };

  const updateLikeButton = (likedBool, btnState) => {
    setLikeButton(likedBool ? '❤️' : '🤍');
    updateTotalLikes(btnState);
  };

  return (
    <div id="App">
      <header>
        <h1>Vlad and Estragon's Chat</h1>
        <h2>{totalLikes > 0 && `${totalLikes} ❤️s`}</h2>
      </header>
      <main>
        <ChatLog
          messages={messageData}
          updateMessageData={updateMessageData}
          totalLikes={totalLikes}
          setTotalLikes={setTotalLikes}
          updateTotalLikes={updateTotalLikes}
          updateLikeButton={updateLikeButton}
          likeButton={likeButton}
        />
      </main>
    </div>
  );
};

export default App;
