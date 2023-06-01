import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
console.log('process.env.CHATGPT_OPENAI_API_KEY', process.env.CHATGPT_OPENAI_API_KEY);
const configuration = new Configuration({

  apiKey: process.env.CHATGPT_OPENAI_API_KEY   //  <|| your API key here,>
});
console.log('process.env.CHATGPT_OPENAI_API_KEY', process.env.CHATGPT_OPENAI_API_KEY);
console.log('process.env', process.env);
const openai = new OpenAIApi(configuration);

const models = [
  {
  model: 'text-davinci-002',
  description: 'A model for generating text responses based on a prompt.',
  prompt: 'Ask for assistance in solving a programming problem you are facing.',
  capabilities: ['Text generation', 'Prompt-based responses'],
  trainingData: 'Trained on diverse text data from the internet.',
  fineTuning: 'Can be further fine-tuned on specific datasets.',
  ethicalConsiderations: 'Ensure responsible use and mitigate biases.',
  links: {
  documentation: 'https://docs.openai.com/models/text-davinci-002/',
  },
  },
  {
  model: 'text-curie-001',
  description: 'A model for generating text responses based on a prompt, with a focus on creative and informative responses.',
  prompt: 'Request a creative suggestion for improving the user experience of a web application.',
  capabilities: ['Text generation', 'Creative responses', 'Informative responses'],
  trainingData: 'Trained on diverse text data from the internet.',
  fineTuning: 'Can be further fine-tuned on specific datasets.',
  ethicalConsiderations: 'Ensure responsible use and mitigate biases.',
  links: {
  documentation: 'https://docs.openai.com/models/text-curie-001/',
  },
  },
  {
  model: 'davinci-codex',
  description: 'A model that can generate code snippets and provide programming assistance.',
  prompt: 'Provide a partially completed code snippet and ask for assistance in completing it.',
  capabilities: ['Code generation', 'Programming assistance'],
  trainingData: 'Trained on code and programming-related text data.',
  fineTuning: 'Can be further fine-tuned on specific code-related datasets.',
  ethicalConsiderations: 'Ensure responsible use and adherence to coding standards.',
  links: {
  documentation: 'https://docs.openai.com/models/davinci-codex/',
  },
  },
  {
  model: 'davinci',
  description: 'A general-purpose language model capable of generating human-like text.',
  prompt: 'Write a brief description of a new feature you want to implement in your application.',
  capabilities: ['Text generation', 'General-purpose responses'],
  trainingData: 'Trained on diverse text data from the internet.',
  fineTuning: 'Can be further fine-tuned on specific datasets.',
  ethicalConsiderations: 'Ensure responsible use and mitigate biases.',
  links: {
  documentation: 'https://docs.openai.com/models/davinci/',
  },
  },
  {
  model: 'curie',
  description: 'A language model that excels at creative writing and generating text with a poetic flair.',
  prompt: 'Compose a poem or a creative piece of writing related to the theme of technology or programming.',
  capabilities: ['Text generation', 'Creative writing', 'Poetic responses'],
  trainingData: 'Trained on diverse text data from the internet.',
  fineTuning: 'Can be further fine-tuned on specific datasets.',
  ethicalConsiderations: 'Ensure responsible use and mitigate biases.',
  links: {
  documentation: 'https://docs.openai.com/models/curie/',
  },
  },
  {
  model: 'gpt-3.5-turbo-0301',
  description: 'A highly advanced language model capable of generating diverse and coherent text responses.',
  prompt: 'Ask for recommendations on the best stack of technologies for developing a web application.',
  capabilities: ['Text generation', 'Diverse responses', 'Coherent responses'],
  trainingData: 'Trained on diverse text data from the internet.',
  fineTuning: 'Can be further fine-tuned on specific datasets.',
  ethicalConsiderations: 'Ensure responsible use and mitigate biases.',
  links: {
  documentation: 'https://docs.openai.com/models/gpt-3.5-turbo-0301/',
  },
  },
  {
  model: 'code-davinci-002',
  description: 'A model specifically designed for generating and assisting with code-related tasks.',
  prompt: 'Write a function to calculate the factorial of a given number.',
  capabilities: ['Code generation', 'Code assistance'],
  trainingData: 'Trained on code and programming-related text data.',
  fineTuning: 'Can be further fine-tuned on specific code-related datasets.',
  ethicalConsiderations: 'Ensure responsible use and adherence to coding standards.',
  links: {
  documentation: 'https://docs.openai.com/models/code-davinci-002/',
  },
  },
  ];

export default function Example() {
  return (
    <div className="bg-gray-900" id="chatGPTFacts">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-medium text-white pt-6">Models</h2>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                          Model
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Description
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Prompt
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Capabilities
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Training Data
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Fine Tuning
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Ethical Considerations
                        </th>

                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800 text-left">
                      {models.map((m) => (
                        <tr key={m.model}>
                          <td className="whitespace-wrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                            {m.model}
                          </td>
                          <td className="whitespace-wrap px-1 py-4 text-sm text-gray-300">{m.description}</td>
                          <td className="whitespace-wrap px-3 py-4 text-sm text-gray-300">{m.prompt}</td>
                          <td className="whitespace-wrap px-3 py-4 text-sm text-gray-300">{m.capabilities}</td>
                          <td className="whitespace-wrap px-3 py-4 text-sm text-gray-300">{m.trainingData}</td>
                          <td className="whitespace-wrap px-3 py-4 text-sm text-gray-300">{m.fineTuning}</td>
                          <td className="whitespace-wrap px-3 py-4 text-sm text-gray-300">{m.ethicalConsiderations}</td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">

                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
