import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const models = {
  'text-davinci-002': 'How are you doing today?',
  'text-curie-001': 'What is the meaning of life?',
  'davinci-codex': 'function sortArray(arr) {',
  'davinci': 'In a hole in the ground there lived a hobbit.',
  'curie': 'To be or not to be, that is the question.',
  'gpt-3.5-turbo-0301': 'The quick brown fox jumped over the lazy dog.',
  'code-davinci-002': 'function sortArray(arr) {'
};

const ModelsComponent = () => {
  const [model, setModel] = useState('text-davinci-002');
  const [prompt, setPrompt] = useState(models[model]);
  const [response, setResponse] = useState('');

  async function runCompletion() {
    const completion = await openai.createCompletion({
      model: model,
      prompt: prompt,

    });
    console.log(completion);
    console.log(completion.data);
    console.log(completion.data.choices);

    setResponse(completion.data.choices[0].text)
  }

  function handleModelChange(event) {
    setModel(event.target.value);
    setPrompt(models[event.target.value]);
    setResponse('');
  }

  return (<>
    <h3 className="mb-4 text-xl font-bold text-left text-white bg-gray-900 bg-opacity-0 ">Choose a Model:</h3>
    <p className="mb-4 text-left text-white bg-gray-900 bg-opacity-0">
      The model determines the type of text that you can generate. For example, the <code className="text-white">text-davinci-002</code> model can generate text, while the <code className="text-white">davinci-codex</code> model can generate code. More options include <code className="text-white">davinci</code>, <code className="text-white">curie</code>, <code className="text-white">gpt-3.5-turbo-0301</code>, and <code className="text-white">code-davinci-002</code>.
    </p>


    {/* <div
        className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"

      >
        <label htmlFor="prompt" className="flex p-6 mb-2 font-bold text-white">Model:</label>

        <p className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"
        >{prompt.replace('***', chatData)}</p>
      </div> */}
    <div className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 ">
      <label htmlFor="prompt" className="flex p-6 mb-2 font-bold text-white">
        Model:
      </label>
      <div className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 " >
        <select
          id="model"
          value={model}
          onChange={handleModelChange}
          className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4">

          <option value="text-davinci-002">text-davinci-002</option>
          <option value="text-curie-001">text-curie-001</option>
          <option value="davinci-codex">davinci-codex</option>
          <option value="davinci">davinci</option>
          <option value="curie">curie</option>
          <option value="gpt-3.5-turbo-0301">gpt-3.5-turbo-0301</option>
          <option value="code-davinci-002">code-davinci-002</option>

        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M9.29289 11.7071C9.68342 12.0976 10.3166 12.0976 10.7071 11.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L10 9.58579L6.70711 6.29289C6.31658 5.90237 5.68342 5.90237 5.29289 6.29289C4.90237 6.68342 4.75 7.31658 5.04289 7.60946L9.04289 11.6095C9.23327 11.8001 9.51957 11.8001 9.70995 11.6095L9.29289 11.7071Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 ">
      <label htmlFor="prompt" className="flex p-6 mb-2 font-bold text-white">
        Prompt:
      </label>
      <input
  className="w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4"
  placeholder={prompt}
  type="text"
  id="prompt"
  value={prompt}
  onChange={(event) => setPrompt(event.target.value)}
  onFocus={(event) => event.target.value = ''}
  onBlur={(event) => event.target.value = {prompt}}
  style={{ height: '100px' }}
/>

    </div>

    <button className="px-4 py-2 m-6 mx-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-pink-500 border-inner-blue-500 hover:border-inner-blue-500 hover:border-inner-4" type="button" onClick={runCompletion}>Generate</button>
    <div className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 ">
      <label htmlFor="prompt" className="flex p-4 mb-2 font-bold text-white">
        Response:
      </label>
      <textarea
        id="response"
        value={response}
        readOnly
        className="flex w-full p-2 m-2 text-sm bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4" />
    </div>

  </>
  );
};
export default ModelsComponent;