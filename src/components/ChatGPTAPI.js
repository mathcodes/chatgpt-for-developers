import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const ChatGPTAPI = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [chatData, setChatData] = useState('');

  async function runCompletion(prompt) {
    console.log("runCompletion");

    const completion = await openai.createCompletion({
      model: 'davinci',
      prompt: prompt,
    });
    setResponse(completion.data.choices[0].text);
    console.log(prompt)
  }

  function handleSubmit(event) {
    console.log(event)
    event.preventDefault();
    const newPrompt = prompt.replace('//*chatData*//', chatData);
    console.log(newPrompt);
    runCompletion(newPrompt);
  }

  return (
    <div className="container mx-auto ">
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen  p-4">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-2xl text-white  font-bold mb-4">ChatGPT Basic API</div>
      <div className="flex flex-col h-80 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">

        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex-grow mb-4">
          {response && (
            <div className="p-4 bg-gray-100 rounded-lg mb-4">
              <p className="font-bold mb-1 text-white">User:</p>
              <p className="mb-1">{prompt.replace('//*chatData*//', chatData)}</p>
              <p className="font-bold mb-1">Chatbot:</p>
              <p>{response}</p>
            </div>
          )}
        </div>
        <div className="flex bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white ">
          <div className="flex bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <input className="rounded-l-lg p-2 w-full border hover:border-pink-500 hover:border-4 placeholder-gray-500" placeholder="Type here" type="text" value={prompt} onChange={(event) => setPrompt(event.target.value)} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg" type="submit">Send</button>
          </div>
          <div className="flex mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div  className="text-sm text-gray-900 bg-gray-900 bg-opacity-25 rounded-lg m-2 p-2 w-full">
            Place any text here that you want to be replaced with the user input. For example, you can type "I like //*chatData*//." and the user input will replace *chatData*.
            </div>
            <input className="rounded-l-lg p-2 w-full placeholder-gray-500 border hover:border-pink-500 hover:border-4 " placeholder="replaces '//*chatData*// if found in your input" type="text" value={chatData} onChange={(event) => setChatData(event.target.value)} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg" type="button" onClick={() => setChatData('')}>Reset</button>
          </div>
        </form>

      </div>
    </div>
    </div>
  );
};

export default ChatGPTAPI;
