import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const EmbeddingsComponent = () => {
  const [input, setInput] = useState('');
  const [model, setModel] = useState('text-embedding-ada-002');
  const [embedding, setEmbedding] = useState(null);

  async function runEmbedding() {
    const embedding = await openai.embeddings({
      input: input,
      model: model,
    });
    setEmbedding(embedding.data[0]);
  }

  function handleInputChange(event) {
    setInput(event.target.value);
    setEmbedding(null);
  }

  function handleModelChange(event) {
    setModel(event.target.value);
    setEmbedding(null);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <div className="mb-4">
          <label htmlFor="model" className="block font-bold mb-2">
            Model:
          </label>
          <select
            id="model"
            value={model}
            onChange={handleModelChange}
            className="w-full border rounded py-2 px-3 mb-1"
          >
            <option value="text-embedding-ada-002">text-embedding-ada-002</option>
            <option value="text-embedding-babbage-001">text-embedding-babbage-001</option>
            <option value="text-embedding-curie-001">text-embedding-curie-001</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="input" className="block font-bold mb-2">
            Input:
          </label>
          <input
            type="text"
            id="input"
            value={input}
            onChange={handleInputChange}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <div className="flex justify-center mb-4">
          <button
            onClick={runEmbedding}
            className={(
              'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
              {
                'opacity-50 cursor-not-allowed': !input,
              }
            )}
            disabled={!input}
          >
            Generate Embedding
          </button>
        </div>
        {embedding && (
          <div>
            <label htmlFor="embedding" className="block font-bold mb-2">
              Embedding:
            </label>
            <textarea
              id="embedding"
              value={embedding}
              readOnly
              className="w-full border rounded py-2 px-3 mb-4"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmbeddingsComponent;