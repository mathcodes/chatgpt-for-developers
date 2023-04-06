import React, { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const ModelsTest = () => {
  const [result, setResult] = useState({
    id: '',
    object: '',
    created: 0,
    model_version: '',
    parent: '',
    training_data: [],
    ready: false,
  });

  useEffect(() => {
    console.log('useEffect');
    const getModel = async () => {
      console.log('getModel');
      const response = await openai.retrieveModel('davinci');
      console.log(response);
      setResult(response);
    };
    getModel();
  }, []);

  const prettyPrintJson = (json) => {
    const jsonString = JSON.stringify(json, null, 2);
    const formattedJson = jsonString.replace(/,\s/g, ',\n');
    return formattedJson;
  };

  return (
    <div className="container h-auto mx-auto">
      <div className="p-4 text-white bg-gray-800">
        <h1 className="mb-4 text-xl font-bold text-left">Language Model Results:</h1>
        <div className="text-left">
          <pre className="p-2 overflow-scroll bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4">
            {prettyPrintJson(result)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ModelsTest;
