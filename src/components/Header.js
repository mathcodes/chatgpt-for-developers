import React, { useState } from "react";
import LoginModal from "./LoginModal";

function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <header className="bg-gray-800 py-4 ">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Site branding */}
        <div className="flex-shrink-0 p-4">
          <a href="/">
            <img
              className="h-8 w-auto"
              src="https://www.jonchristie.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.11e01cbb.png&w=64&q=75"
              alt="Workflow"
            />
          </a>
        </div>

        {/* Login button */}
        <div>
          <button
            onClick={handleButtonClick}
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
      </div>

      {/* The LoginModal component */}
      {isModalVisible && <LoginModal onClose={handleModalClose} />}
    </header>
  );
}

export default Header;
