// import React from 'react'

// function ChatGPTFacts() {
//   return (
// <>
// <h1 className="text-center">ChatGPTFacts</h1>
// <div
//   className="flex p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"sName="flex p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"
// >GPT3
//   <p>A powerful language model that can generate human-like text. Example query: "Generate a list of ten possible names for a new ice cream flavor."</p>
// </div>
// <div
//   className="flex p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"
// >Davinci
//   <p>A general-purpose language model that can complete tasks such as translation and summarization. Example query: "Summarize the plot of the novel 'To Kill a Mockingbird.'"</p>
// </div>
// <div
//   className="flex p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"
// >Curie
//   <p>A smaller and faster version of Davinci that can still perform a wide range of language tasks. Example query: "Translate the phrase 'hello, how are you?' into Spanish."</p>
// </div>
// <div
//   className="flex p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"
// >Ada
//   <p>A research-focused language model that can adapt to different domains and tasks. Example query: "Given a set of scientific articles, can you summarize the key findings and provide a list of references?"</p>
// </div>
// <div
//   className="flex p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"
// >Babbage
//   <p>A language model that can perform simple language tasks such as sentiment analysis and named entity recognition. Example query: "Analyze the sentiment of this customer review for a new restaurant."</p>
// </div>
// <div
//   className="flex p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"
// >Codex
//   <p>A language model that can generate code and help with software development tasks. Example query: "Generate code for a program that sorts a list of numbers in ascending order."</p>
// </div>
// <div
//   className="flex p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"
// >GPTNeo
//   <p>An open-source version of GPT-3 created by EleutherAI. Example query: "Generate a creative writing prompt for a story about a time traveler."</p>
// </div>
// </>  )
// }

// export default ChatGPTFacts

import React from 'react';

function ChatGPTFacts() {
  return (
    <div className="container h-auto mx-auto">
      <div className="p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-fit">
        <div className="flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <h2 className="mb-4 text-2xl font-bold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">ChatGPTFacts</h2>
          <div className="flex flex-col ">
            <div className="flex p-2 m-2 text-white bg-gray-900 bg-opacity-50 border rounded-lg hover:border-pink-500 hover:border-4">
              <p className="self-center justify-center w-1/4 p-3 mx-2 align-middle border">GPT3</p>
              <p className="w-3/4 p-2 m-2 border">A powerful language model that can generate human-like text. Example query: "Generate a list of ten possible names for a new ice cream flavor."</p>
            </div>
            <div className="flex p-2 m-2 text-white bg-gray-900 bg-opacity-50 border rounded-lg hover:border-pink-500 hover:border-4">
              <p className="self-center justify-center w-1/4 p-3 mx-2 align-middle border">Davinci</p>
              <p className="w-3/4 p-2 m-2 border">A general-purpose language model that can complete tasks such as translation and summarization. Example query: "Summarize the plot of the novel 'To Kill a Mockingbird.'"</p>
            </div>
            <div className="flex p-2 m-2 text-white bg-gray-900 bg-opacity-50 border rounded-lg hover:border-pink-500 hover:border-4">
              <p className="self-center justify-center w-1/4 p-3 mx-2 align-middle border">Curie</p>
              <p className="w-3/4 p-2 m-2 border">A smaller and faster version of Davinci that can still perform a wide range of language tasks. Example query: "Translate the phrase 'hello, how are you?' into Spanish."</p>
            </div>
            <div className="flex p-2 m-2 text-white bg-gray-900 bg-opacity-50 border rounded-lg hover:border-pink-500 hover:border-4">
              <p className="self-center justify-center w-1/4 p-3 mx-2 align-middle border">Ada</p>
              <p className="w-3/4 p-2 m-2 border">A research-focused language model that can adapt to different domains and tasks. Example query: "Given a set of scientific articles, can you summarize the key findings and provide a list of references?"</p>
            </div>
            <div className="flex p-2 m-2 text-white bg-gray-900 bg-opacity-50 border rounded-lg hover:border-pink-500 hover:border-4">
              <p className="self-center justify-center w-1/4 p-3 mx-2 align-middle border">Babbage</p>
              <p className="w-3/4 p-2 m-2 border">A language model that can perform simple language tasks such as sentiment analysis and named entity recognition. Example query: "Analyze the sentiment of this customer review for a new restaurant."</p>
            </div>
            <div className="flex p-2 m-2 text-white bg-gray-900 bg-opacity-50 border rounded-lg hover:border-pink-500 hover:border-4">
              <p className="self-center justify-center w-1/4 p-3 mx-2 align-middle border">Codex</p>
              <p className="w-3/4 p-2 m-2 border">A language model that can generate code and help with software development tasks. Example query: "Generate code for a program that sorts a list of numbers in ascending order."</p>
            </div>
            <div className="flex p-2 m-2 text-white bg-gray-900 bg-opacity-50 border rounded-lg hover:border-pink-500 hover:border-4">
              <p className="self-center justify-center w-1/4 p-3 mx-2 align-middle border">GPTNeo</p>
              <p className="w-3/4 p-2 m-2 border">An open-source version of GPT-3 created by EleutherAI. Example query: "Generate a creative writing prompt for a story about a time traveler."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatGPTFacts;
