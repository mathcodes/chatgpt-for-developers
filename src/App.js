import React, { useState } from 'react';
import './App.css';
import ChatGPTAPI from './components/ChatGPTAPI';
import ChatGPTFacts from './components/ChatGPTFacts';
import SideBarWrapper from './components/SideBarWrapper';

function App() {


  return (
    <SideBarWrapper >
      <div className="container App">
        <ChatGPTAPI id="chatgptapi"/>
        <ChatGPTFacts id="chatgptfacts" />
      </div>
    </SideBarWrapper>
  );
}

export default App;


