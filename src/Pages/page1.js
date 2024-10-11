// src/Pages/page1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/page2');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-yellow-100">
            <button 
                className="px-6 py-3 bg-pink-700 text-white rounded-lg shadow hover:bg-pink-400"
                onClick={handleClick}
            >
                Coucou
            </button>
        </div>
    );
};

export default Page1;

