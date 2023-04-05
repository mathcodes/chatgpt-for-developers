import React, { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: 'process.env.REACT_APP_OPENAI_KEY',
});

const openai = new OpenAIApi(configuration);

const ModelsTest = () => {
  const [result, setResult] = useState('');

  useEffect(() => {
    const getModel = async () => {
      const response = await openai.retrieveModel('text-davinci-003');
      setResult(response);
    };
    getModel();
  }, []);

  return (
    <div
    className="flex flex-col items-center justify-center w-full h-full p-4 text-center text-white bg-gray-800"
    >
    <h1 className="mb-4 text-xl font-bold">Language Model Results:</h1>
    <code className="block text-white break-words whitespace-pre-wrap">
      {JSON.stringify(result)}
    </code>
  </div>

  );
};

export default ModelsTest;