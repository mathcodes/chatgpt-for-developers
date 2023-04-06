import React, { useState } from 'react';
import './App.css';
import ChatGPTAPI from './components/ChatGPTAPI';
import ChatGPTFacts from './components/ChatGPTFacts';

function App() {


  return (
    <div className="h-full App">
      <ChatGPTAPI />
      <ChatGPTFacts/>
    </div>
  );
}

export default App;
