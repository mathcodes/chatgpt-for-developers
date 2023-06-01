import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import ModelsComponent from './ModelsComponent';
import ModelsTest from './ModelsTest';

const configuration = new Configuration({
  apiKey: process.env.CHATGPT_OPENAI_API_KEY  //  <|| your API key here,>
});

const openai = new OpenAIApi(configuration);

const ChatGPTAPI = () => {
  const [prompt, setPrompt] = useState('change this prompt');
  const [response, setResponse] = useState('then you can see the response here');
  const [chatData, setChatData] = useState('');


  async function runCompletion(prompt) {
    console.log("runCompletion");
    console.log(response);
    const completion = await openai.createCompletion({ // this is an async function that calls the API
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: .6,
      max_tokens: 200,
    });
    setResponse(
      // map over the choices array and return the text
      completion.data.choices.map((choice) => choice.text)
    );
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
    <div className="container h-auto mx-auto">
      <div className="p-4 bg-zinc-600 h-fit">
        <div className="flex flex-col rounded bg-zinc-700">
          <h2 className="mb-4 text-2xl font-bold text-white bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-500">ChatGPT Basic API</h2>
          <section className="p-2 m-4 bg-opacity-50 border rounded-sm shadow-xl border-zinc-300 shadow-white bg-zinc-900">
            <h3 className="mb-4 text-xl font-bold text-left text-white bg-gray-900 bg-opacity-0 ">Attach data as variable:</h3>
            <p className="mb-4 text-left text-white bg-gray-900 bg-opacity-0">This is a basic chatbot that uses the OpenAI API. You can type in a prompt and the chatbot will respond. You can also type in a prompt and the chatbot will respond with the user input. For example, you can type "I like ***." and the user input will replace ***.</p>
            <form onSubmit={handleSubmit} className="text-white bg-opacity-0 rounded-2xl">
              <div className="flex flex-col mt-4 rounded-2xl ">
                <div>
                <div className="w-full p-2 m-2 text-sm bg-opacity-50 rounded-sm text-start text-zinc-200">
                  Place any text here that you want to be replaced with the user input. For example, you can type "I like ***." and the user input will replace ***.
                </div>
                <input className="w-3/4 h-40 p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-4 " placeholder="replaces *** if found in your input" type="text" value={chatData} onChange={(event) => setChatData(event.target.value)} />
                </div>
                <button className="px-4 py-2 m-6 mx-4 font-bold text-white bg-blue-500 rounded-sm hover:bg-pink-500" type="button" onClick={() => setChatData('')}>Reset</button>
              </div>
              <div className="flex rounded-2xl">
                <input className="w-full px-2 py-0 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-4 "
                  placeholder="Type here" type="text" value={prompt} onChange={(event) => setPrompt(event.target.value)} />
                <button className="px-4 py-2 m-6 mx-4 font-bold text-white bg-blue-500 rounded-sm hover:bg-pink-500" type="submit">Send</button>
              </div>
            </form>
            <div className="flex flex-col mb-4 bg-opacity-0 bg-zinc-900">
              {/* {response && (
              <div className="p-4 mb-4 bg-gray-100 rounded-sm">
                <p className="mb-1 font-bold text-white">User:</p>
                <p className="mb-1">{prompt.replace('***', chatData)}</p>
                <p className="mb-1 font-bold">Chatbot:</p>
                <p>{response}</p>
              </div>
            )} */}
              <div
                className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-4"

              >
                <label htmlFor="prompt" className="flex p-6 mb-2 font-bold text-white">User:</label>

                <p className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-4"
                >{prompt.replace('***', chatData)}</p>
              </div>
              <div
                className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-4"

              >
                <label htmlFor="prompt" className="flex p-6 mb-2 font-bold text-white">Chatbot:</label>
                <p className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-4"
                >{response}</p>
              </div>
            </div>
          </section>
          <section className="p-2 m-4 bg-opacity-50 border rounded-sm shadow-xl bg-zinc-900 border-zinc-300 shadow-white opacity:bg-0">
            <ModelsComponent id="differentModels"/>
          </section>
          <section className="p-2 m-4 bg-opacity-50 border rounded-sm shadow-xl bg-zinc-900 border-zinc-300 shadow-white opacity:bg-0">
            <ModelsTest id="languageModelResults"/>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ChatGPTAPI;
