import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const ChatGPTAPI = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  async function runCompletion(prompt) {
    console.log("runCompletion");
    const completion = await openai.createCompletion({
      model: 'davinci',
      prompt: prompt,
    });
    setResponse(completion.data.choices[0].text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    runCompletion(prompt);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500">
      <div className="text-center text-white font-bold text-3xl p-4">ChatGPT Basic API</div>
      <div className="flex flex-row h-screen">

        <div className="flex-grow px-4">
          {response && (
            <div className="bg-gray-200 rounded-lg p-4 mb-4">
              <p className="font-bold mb-2">User:</p>
              <p className="mb-2">{prompt}</p>
              <p className="font-bold mb-2">Chatbot:</p>
              <p>{response}</p>
            </div>
          )}
        </div>

        <div className="bg-gray-200 p-4 rounded-lg flex flex-row">
          <form onSubmit={handleSubmit} className="flex-grow">
            <input placeholder="TYPE" type="text" value={prompt} onChange={(event) => setPrompt(event.target.value)} className="w-full rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white py-2 px-4" />
            <button type="submit" className="px-8 rounded-r-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 transition duration-300 ease-in-out">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ChatGPTAPI;
