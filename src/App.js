import React, { useState } from 'react';
import './App.css';
import ChatGPTAPI from './components/ChatGPTAPI';
import ChatGPTFacts from './components/ChatGPTFacts';
import SideBarWrapper from './components/SideBarWrapper';
import Header from './components/Header';

function App() {


  return (
    <>
    <Header />
    <div className="bg-[#2d3748] py-4 ">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 flex justify-center items-center h-screen">

    <SideBarWrapper >

      <div className="container App">
        <ChatGPTAPI id="chatgptapi"/>
        <ChatGPTFacts id="chatgptfacts" />
      </div>
    </SideBarWrapper>
    </div>
    </div>
    </>
  );
}

export default App;


