import React from 'react';

const SubmitButton = ({ text }) => (
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    {text}
  </button>
);

export default SubmitButton;
