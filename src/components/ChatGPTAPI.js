import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import ModelsComponent from './ModelsComponent';
import ModelsTest from './ModelsTest';
import PromptsComponent from './PromptsComponent';

const configuration = new Configuration({
  apiKey: process.env.CHATGPT_OPENAI_API_KEY || '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'
});

const openai = new OpenAIApi(configuration);

const ChatGPTAPI = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
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
    let aiResponse = document.getElementById('aiResponse');
    aiResponse.setAttribute('style', 'display: block');
    runCompletion(newPrompt);
  }

  return (
    <div className="container h-auto mx-auto">
      <div className="p-4  h-fit">
        <div className="flex flex-col rounded">

          {/* TOP HEADER */}
          <h2 className="mb-4 text-2xl text-white ">OpenAI - Large Language Models</h2>
          <h3 className="mb-4 text-lg text-white ">Models, Prompts, Resources, and the Art of Prompt Engineering</h3>
          <section className="p-2 m-4 bg-opacity-50 border rounded-sm shadow-xl bg-zinc-900 border-zinc-300 shadow-white opacity:bg-0">
            <PromptsComponent id="promptComponent" />
          </section>
          <section className="p-6 m-1 bg-opacity-50 rounded-sm ">
            {/* SECTION HEADER */}
            <h3 className="mb-4 text-xl font-bold text-left text-white ">Attach data as variable</h3>
            <p className="mb-4 text-left text-white ">This is a basic chatbot that uses the OpenAI API. You can type in a prompt and the chatbot will respond. </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="text-white bg-opacity-0 rounded-2xl">

              {/* *** PLACEHOLDER */}
              <div className="flex mt-4 rounded-2xl ">
                <input className="w-full px-2 py-0 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-2 " placeholder="replaces *** if found in your input" type="text" value={chatData} onChange={(event) => setChatData(event.target.value)} />
                <button className="m-6 mx-4 font-bold text-white rounded-sm hover:bg-pink-500" type="button" onClick={() => setChatData('')}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>

              {/* INPUT */}
              <div className="flex rounded-2xl">
                <input className="w-full px-2 py-0 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-2 "
                  placeholder="Type here" type="text" value={prompt} onChange={(event) => setPrompt(event.target.value)} />
                <button className="
                m-6 mx-4 font-bold text-whiterounded-sm hover:bg-pink-500" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </form>
            <div className="flex flex-col mb-4 bg-opacity-0 bg-zinc-900">
              <div className="flex w-full p-2 m-2 text-sm rounded-sm text-zinc-200 hover:border-pink-500 hover:border-1">
                <label htmlFor="prompt" className="flex p-6 mb-2 font-bold text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </label>
                <p className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-1">
                  {prompt.replace('***', chatData)}
                </p>
              </div>
              <div className="flex w-full p-2 m-2 text-sm rounded-sm text-zinc-200 hover:border-pink-500 hover:border-1" >
                <label htmlFor="prompt" className="flex p-6 mb-2 font-bold text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>

                </label>
                <p className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-1">
                  {response}
                </p>
              </div>

              {/* <div className="flex w-full p-2 m-2 h-[65px] text-sm rounded-sm text-zinc-200 hover:border-pink-500 hover:border-1" id="aiResponse">
                <label htmlFor="prompt" className="flex p-6 mb-2 font-bold text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </label>
                <p className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-sm text-zinc-200 hover:border-pink-500 hover:border-1">
                </p>
              </div> */}

            </div>
          </section>

          <section className="p-2 m-4 bg-opacity-50 border rounded-sm shadow-xl bg-zinc-900 border-zinc-300 shadow-white opacity:bg-0">
            <ModelsComponent id="differentModels" />
          </section>
          <section className="p-2 m-4 bg-opacity-50 border rounded-sm shadow-xl bg-zinc-900 border-zinc-300 shadow-white opacity:bg-0">
            <ModelsTest id="languageModelResults" />
          </section>

        </div>
      </div>
    </div>
  );
};

export default ChatGPTAPI;
