

import React, { useState } from 'react';

const Aipage = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    console.log(response)
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page refresh
        try {
            const res = await fetch('http://localhost:5000/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input }), // Sending the input to the backend
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setResponse(data.gemini_response); // Save the response from the backend
        } catch (error) {
            setResponse('Error: ' + error.message);
        }
    };

    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Ask Something Positive</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <textarea
                    value={input}
                    onChange={handleChange}
                    placeholder="Tell me something positive..."
                    required
                    className="w-full h-40 p-4 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="submit" 
                    className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
            {response && (
                <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    <h2 className="text-lg font-semibold">Response:</h2>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default Aipage;


