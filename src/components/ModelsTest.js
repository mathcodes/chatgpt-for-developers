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
    <div>
      <h1>Language Model Results:</h1>
      <code
        style={{
          display: 'block',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}

      >{JSON.stringify(result)}</code>
    </div>
  );
};

export default ModelsTest;