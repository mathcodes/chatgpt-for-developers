// import { useState } from 'react';
// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: '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',
// });

// const openai = new OpenAIApi(configuration);

// const models = {
//   'text-davinci-002': 'How are you doing today?',
//   'text-curie-001': 'What is the meaning of life?',
//   'davinci-codex': 'function sortArray(arr) {',
//   'davinci': 'In a hole in the ground there lived a hobbit.',
//   'curie': 'To be or not to be, that is the question.',
// };

// const ModelsComponent = () => {
//   const [model, setModel] = useState('text-davinci-002');
//   const [prompt, setPrompt] = useState(models[model]);
//   const [response, setResponse] = useState('');

//   async function runCompletion() {
//     const completion = await openai.createCompletion({
//       model: model,
//       prompt: prompt,
//     });
//     setResponse(completion.data.choices[0].text);
//   }

//   function handleModelChange(event) {
//     setModel(event.target.value);
//     setPrompt(models[event.target.value]);
//     setResponse('');
//   }

//   return (
//     <div>
//       <div>
//         <label htmlFor="model">Model:</label>
//         <select id="model" value={model} onChange={handleModelChange}>
//           <option value="text-davinci-002">text-davinci-002</option>
//           <option value="text-curie-001">text-curie-001</option>
//           <option value="davinci-codex">davinci-codex</option>
//           <option value="davinci">davinci</option>
//           <option value="curie">curie</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="prompt">Prompt:</label>
//         <input type="text" id="prompt" value={prompt} onChange={(event) => setPrompt(event.target.value)} />
//       </div>
//       <div>
//         <button onClick={runCompletion}>Generate</button>
//       </div>
//       <div>
//         <label htmlFor="response">Response:</label>
//         <textarea id="response" value={response} readOnly />
//       </div>
//     </div>
//   );
// };

// export default ModelsComponent;

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
  'code-davinci-002': 'function sortArray(arr) {',
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
    setResponse(completion.data.choices[0].text);
  }

  function handleModelChange(event) {
    setModel(event.target.value);
    setPrompt(models[event.target.value]);
    setResponse('');
  }

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-10 rounded-lg shadow-md">
      <div className="mb-6">
        <label htmlFor="model" className="block text-white font-bold mb-2">
          Model:
        </label>
        <div className="relative">
          <select
            id="model"
            value={model}
            onChange={handleModelChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="text-davinci-002">text-davinci-002</option>
            <option value="text-curie-001">text-curie-001</option>
            <option value="davinci-codex">davinci-codex</option>
            <option value="davinci">davinci</option>
<option value="curie">curie</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
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
      <div className="mb-6">
        <label htmlFor="prompt" className="block text-white font-bold mb-2">
          Prompt:
        </label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

        <button
          onClick={runCompletion}
          className="bg-white hover:bg-gray-300 text-purple-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-4"
        >
          Generate
        </button>

      <div>
        <label htmlFor="response" className="block text-white font-bold p-2">
          Response:
        </label>
        <textarea
          id="response"

          value={response}
          readOnly
          className="block w-full h-48 bg-white border border-gray-400 hover:border-gray-500 px-4 py-0 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};
export default ModelsComponent;