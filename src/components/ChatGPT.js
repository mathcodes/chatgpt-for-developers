import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';



const ChatGPT = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const configuration = new Configuration({
    apiKey: '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',
  });

  const openai = new OpenAIApi(configuration);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = {
      engine: 'text-davinci-003',
      prompt: prompt,
    };

    const response = await openai.completions.create(params);
    const responseText = response.choices[0].text.trim();
    setResponse(responseText);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ flexGrow: 1, overflow: 'scroll' }}>
          {response && (
            <div style={{ padding: '10px', backgroundColor: 'lightgray', borderRadius: '5px', marginBottom: '10px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>User:</p>
              <p style={{ marginBottom: '10px' }}>{prompt}</p>
              <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Chatbot:</p>
              <p>{response}</p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={prompt} onChange={(event) => setPrompt(event.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ChatGPT;
