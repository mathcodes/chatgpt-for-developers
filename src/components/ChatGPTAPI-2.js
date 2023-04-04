import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const ChatGPTAPI = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    console.log("useEffect");
    runCompletion('How are you doing today?');
  }, []);

  async function runCompletion(prompt) {
    console.log("runCompletion");
    const chatData = prompt.split("***")[1] || "";
    prompt = prompt.split("***")[0];
    const completion = await openai.createCompletion({
      model: 'davinci',
      prompt: prompt + chatData,
    });
    setResponse(completion.data.choices[0].text);
  }

  function handleChatDataSubmit(event) {
    event.preventDefault();
    setPrompt(prompt + chatData);
    setChatData("");
  }

  function handlePromptSubmit(event) {
    event.preventDefault();
    runCompletion(prompt);
  }

  const [chatData, setChatData] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 to-blue-400">
      <div className="text-white font-bold text-2xl mb-4">ChatGPT Basic API</div>
      <div className="flex flex-col h-full w-full max-w-screen-md mx-2">
        <div className="flex-grow overflow-y-auto p-2">
          {response && (
            <div className="p-2 bg-white rounded-md mb-2">
              <p className="font-bold mb-1">User:</p>
              <p className="mb-2">{prompt}</p>
              <p className="font-bold mb-1">Chatbot:</p>
              <p>{response}</p>
            </div>
          )}
        </div>
        <form onSubmit={handlePromptSubmit}>
          <div className="bg-white rounded-lg p-2 mb-2">
            <input
              className="w-full border rounded-lg px-2 py-1 focus:outline-none"
              placeholder="Type your message here..."
              type="text"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
            />
          </div>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600" type="submit">Send</button>
        </form>
        <form onSubmit={handleChatDataSubmit}>
          <div className="bg-white rounded-lg p-2">
            <input
              className="w-full border rounded-lg px-2 py-1 focus:outline-none"
              placeholder="Type any additional information here..."
              type="text"
              value={chatData}
              onChange={(event) => setChatData(event.target.value)}
            />
          </div>
          <button className="bg-purple-500 text-white rounded-lg px-4 py-2 hover:bg-purple-600 mt-2" type="submit">Attach</button>
        </form>
      </div>
    </div>
  );
};

export default ChatGPTAPI;
