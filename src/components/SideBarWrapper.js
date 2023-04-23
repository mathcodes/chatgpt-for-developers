function SideBarWrapper(props) {

  return (
    <div className="flex h-screen">
      <div className="fixed flex flex-col w-64 bg-gray-900 border border-gray-200">
        <div className="flex items-center justify-center h-16 ">
          <span className="text-xl font-bold text-gray-200 hover:text-black">GPT API Playground</span>
        </div>
        <div className="flex-grow px-2 py-4 overflow-y-auto">
          <nav className="space-y-2">
            <h3 className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">examples</h3>
            <a href="#" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">Storing data in a variable</a>
            <a href="#differentModels" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">Different Models</a>
            <a href="#languageModelResults" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">Language Model Results</a>
            <a href="#chatGPTFacts" className="block p-2 text-gray-200 border rounded hover:text-black hover:bg-gray-200">ChatGPT Facts</a>
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