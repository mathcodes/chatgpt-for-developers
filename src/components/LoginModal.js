import React from "react";

function LoginModal(props) {
  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  const handleCancel = () => {
    if (props.onCancel) {
      props.onCancel();
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-white opacity-25"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Modal header */}
          <div className="bg-white-200 px-4 py-3">
            <h2 className="text-lg font-medium text-white-900" id="modal-headline">
              Log In
            </h2>

            <button
              onClick={handleClose}
              className="float-right text-white-500 hover:text-white-600 focus:outline-none"
            >
              <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M12 10.586L7.707 6.293a1 1 0 10-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 101.414 1.414L12 13.414l4.293 4.293a1 1 0 101.414-1.414L13.414 12l4.293-4.293a1 1 0 10-1.414-1.414L12 10.586z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Modal content */}
          <div className="px-4 py-5 sm:p-6">
            <label htmlFor="username" className="block font-medium text-white-700 mb-2">
              Username
            </label>
            <input type="text" id="username" name="username" className="form-input rounded-md shadow-sm mb-2" />

            <label htmlFor="password" className="block font-medium text-white-700 mb-2">
              Password
            </label>
            <input type="password" id="password" name="password" className="form-input rounded-md shadow-sm mb-6" />

            <div className="mt-4 sm:mt-2 flex justify-between">
              <button
                onClick={handleClose}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-800 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Log In
              </button>

              <button
                onClick={handleCancel}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-white-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-white-700 hover:text-white-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
