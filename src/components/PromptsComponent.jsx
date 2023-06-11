import React, { useState, useEffect } from 'react';
import { prompts } from '../prompts/prompts.js';

const PromptsComponent = () => {

  let promptItems = prompts.map((p) => {
    return (
      <div className="p-4 text-white bg-gray-800" id={p.id}>
        <h1 className="mb-4 text-xl text-left">{p.Title}</h1>
        <div className="text-lg text-left break-all">
          <pre className="p-2 bg-gray-800 bg-opacity-50 border rounded-lg text-zinc-200 hover:border-pink-500  break-normal whitespace-pre-wrap">
            {p.Prompt}
          </pre>
        </div>
      </div>

    );

  });


  return (
    <div className="container h-auto mx-auto" id="">
      {promptItems}
    </div>
  );
};

export default PromptsComponent;
