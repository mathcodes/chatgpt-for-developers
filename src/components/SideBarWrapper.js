function SideBarWrapper(props) {

  return (
    <div className="flex h-screen">
      <div className="fixed flex flex-col w-64 bg-gray-900 h-screen
      ">
        <div className="flex items-center justify-center
         ">
          <span className="text-xl mt-6 font-bold text-gray-200 hover:text-black">GPT API Playground</span>
        </div>
        <div className="flex-grow px-2 py-4 overflow-y-auto">
          <nav className="space-y-2">
            <h3 className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">MODELS</h3>
            <a href="#differentModels" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">Different Models</a>
            <a href="#languageModelResults" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">Language Model Results</a>
            <h3 className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">RESOURCES</h3>
            <a href="#chatGPTFacts" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">ChatGPT Facts</a>
            <h3 className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">PROMPT ENGINEERING</h3>
            <a href="#" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">Storing data in a variable</a>
            <h3 className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">PROMPTS</h3>
            <a href="#" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">Web Design Consultant</a>
            <a href="#" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">JavaScript Console</a>
            <a href="#" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">Act as a JavaScript Console</a>

          </nav>
        </div>
      </div>
      <div className="flex-grow p-6 ml-64">
        {props.children}
      </div>
    </div>
  );
}

export default SideBarWrapper;