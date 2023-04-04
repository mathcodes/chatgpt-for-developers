import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import ModelsComponent from './ModelsComponent';
import ModelsTest from './ModelsTest';

const configuration = new Configuration({
  apiKey: 'process.env.REACT_APP_OPENAI_KEY',
});

const openai = new OpenAIApi(configuration);

const ChatGPTAPI = () => {
  const [prompt, setPrompt] = useState('change this prompt');
  const [response, setResponse] = useState('then you can see the response here');
  const [chatData, setChatData] = useState('');

  async function runCompletion(prompt) {
    console.log("runCompletion");

    const completion = await openai.createCompletion({ // this is an async function that calls the API
      model: 'davinci',
      prompt: prompt,
    });
    setResponse(completion.data.choices[0].text);
    console.log(response);
    console.log(completion);
    console.log(completion.data);
    console.log(completion.data.choices);
    console.log(prompt)
  }

  function handleSubmit(event) {
    console.log(event)
    event.preventDefault();
    const newPrompt = prompt.replace('***', chatData);
    console.log(newPrompt);
    runCompletion(newPrompt);
  }

  return (
    <div className="container mx-auto h-auto">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-fit  p-4">
        <div className="flex flex-col  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">



          <h2 className="text-2xl text-white font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">ChatGPT Basic API</h2>
          <section className="border border-zinc-300 p-2 shadow-xl shadow-white m-4 rounded-lg bg-zinc-900 bg-opacity-50">
            <h3 className="text-xl text-left text-white font-bold mb-4 bg-gray-900 bg-opacity-0 ">Attach data as variable:</h3>
            <p className="text-white text-left mb-4 bg-gray-900 bg-opacity-0">This is a basic chatbot that uses the OpenAI API. You can type in a prompt and the chatbot will respond. You can also type in a prompt and the chatbot will respond with the user input. For example, you can type "I like ***." and the user input will replace ***.</p>
            <form onSubmit={handleSubmit} className="text-white bg-opacity-0 rounded-2xl">
              <div className="flex mt-4 rounded-2xl ">
                <div className="text-sm text-start text-zinc-200 bg-opacity-50 rounded-lg m-2 p-2 w-full">
                  Place any text here that you want to be replaced with the user input. For example, you can type "I like ***." and the user input will replace ***.
                </div>
                <input className="text-sm text-zinc-200 bg-gray-900 bg-opacity-50 rounded-lg m-2 p-2 w-full border hover:border-pink-500 hover:border-4 " placeholder="replaces *** if found in your input" type="text" value={chatData} onChange={(event) => setChatData(event.target.value)} />
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg m-6 mx-4" type="button" onClick={() => setChatData('')}>Reset</button>
              </div>
              <div className="flex rounded-2xl">
                <input className="text-sm text-zinc-200  bg-gray-900 bg-opacity-50 rounded-lg m-2 px-2 py-0 w-full border hover:border-pink-500 hover:border-4 "
                  placeholder="Type here" type="text" value={prompt} onChange={(event) => setPrompt(event.target.value)} />
                <button className="bg-blue-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg m-6 mx-4" type="submit">Send</button>
              </div>
            </form>
            <div className="bg-zinc-900 bg-opacity-0 flex flex-col  mb-4">
              {/* {response && (
              <div className="p-4 bg-gray-100 rounded-lg mb-4">
                <p className="font-bold mb-1 text-white">User:</p>
                <p className="mb-1">{prompt.replace('***', chatData)}</p>
                <p className="font-bold mb-1">Chatbot:</p>
                <p>{response}</p>
              </div>
            )} */}
              <div
                className="flex text-sm text-zinc-200 bg-gray-900 bg-opacity-50 rounded-lg m-2 p-2 w-full border hover:border-pink-500 hover:border-4"

              >
                <label htmlFor="prompt" className="flex p-6 text-white font-bold mb-2">User:</label>

                <p className="flex text-sm text-zinc-200 bg-gray-900 bg-opacity-50 rounded-lg m-2 p-2 w-full border hover:border-pink-500 hover:border-4"
                >{prompt.replace('***', chatData)}</p>
                </div>
                <div
                className="flex text-sm text-zinc-200 bg-gray-900 bg-opacity-50 rounded-lg m-2 p-2 w-full border hover:border-pink-500 hover:border-4"

              >
                <label htmlFor="prompt" className="flex p-6 text-white font-bold mb-2">Chatbot:</label>
                <p className="flex text-sm text-zinc-200 bg-gray-900 bg-opacity-50 rounded-lg m-2 p-2 w-full border hover:border-pink-500 hover:border-4"
                >{response}</p>
              </div>
            </div>
          </section>
          <section className="bg-zinc-900 bg-opacity-50 border border-zinc-300 p-2 shadow-xl shadow-white m-4 rounded-lg bg-zinc-900 opacity:bg-0">
            <ModelsComponent />
          </section>
          <section className="bg-zinc-900 bg-opacity-50 border border-zinc-300 p-2 shadow-xl shadow-white m-4 rounded-lg bg-zinc-900 opacity:bg-0">
            <ModelsTest />
          </section>

        </div>
      </div>
    </div>
  );
};

export default ChatGPTAPI;
