// src/Pages/page2.js
import React, { useEffect, useState } from 'react';

const Page2 = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/coucou')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
            <h1 className="text-lg text-pink-600  font-bold mb-4">Page 2</h1>
            <p className="text-3xl text-pink-600">{message}</p>
        </div>
    );
};

export default Page2;


