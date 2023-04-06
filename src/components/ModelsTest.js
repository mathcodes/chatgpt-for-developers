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
  const descriptions = {
    data: 'The information of the model, including the id, object type, creation date, ownership, permission, root, and parent.',
    id: 'The identifier of the model.',
    object: 'The type of object being returned.',
    created: 'The creation timestamp of the model.',
    owned_by: 'The entity that owns the model.',
    permission: 'The permission level of the entity for the model.',
    root: 'The root of the model tree.',
    parent: 'The parent of the model tree.',
    status: 'The status code of the response.',
    statusText: 'The status message of the response.',
    headers: 'The response headers.',
    'content-type': 'The content type of the response.',
    config: 'The request configuration.',
    transitional: 'The transitional configuration.',
    silentJSONParsing: 'Whether or not to silently parse the response JSON.',
    forcedJSONParsing: 'Whether or not to force JSON parsing.',
    clarifyTimeoutError: 'Whether or not to clarify timeout errors.',
    transformRequest: 'The request transformer functions.',
    transformResponse: 'The response transformer functions.',
    timeout: 'The request timeout.',
    xsrfCookieName: 'The name of the XSRF cookie.',
    xsrfHeaderName: 'The name of the XSRF header.',
    maxContentLength: 'The maximum content length of the response.',
    maxBodyLength: 'The maximum body length of the response.',
    Accept: 'The accepted content types of the request.',
    'User-Agent': 'The user agent of the request.',
    Authorization: 'The authorization header of the request.',
    method: 'The request method.',
    url: 'The request URL.',
    request: 'The request object.',
  };
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
    const lines = formattedJson.split('\n');
    const indents = lines.map((line) => {
      const match = line.match(/^\s+/);
      return match ? match[0].length : 0;
    });
    const spans = lines.map((line, i) => {
      const indent = indents[i];
      const keyMatch = line.match(/^\s+"(\w+)":/);
      if (keyMatch) {
        const key = keyMatch[1];
        const valueStart = indent + keyMatch[0].length;
        const value = line.slice(valueStart);
        console.log(key, value);
        return (
          <div key={i} className="flex flex-row">
            <span className="pl-4 text-xl cursor-pointer text-orange hover:text-pink-500" title={key + ": " + descriptions[key]}>
              {line}
            </span>
          </div>
        );
      } else {
        return <div key={i}>{line}</div>;
      }
    });
    return <div className="pl-4 text-2xl">{spans}</div>;
  };


  return (
    <div className="container h-auto mx-auto">
      <div className="p-4 text-white bg-gray-800">
        <h1 className="mb-4 text-xl font-bold text-left">Language Model Results:</h1>
        <div className="text-xl text-left">
          <pre className="p-2 overflow-scroll bg-gray-900 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500 hover:border-4">
            {prettyPrintJson(result)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ModelsTest;
