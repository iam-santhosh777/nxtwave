// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ onClick }) => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/resource');
      };

    return (
        <button onClick={handleBack} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Back
        </button>
    );
};

export default BackButton;
