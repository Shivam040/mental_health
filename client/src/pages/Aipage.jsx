

import React, { useState } from 'react';
import { useEffect } from 'react';
const Aipage = ({data3}) => {
    const [splitArray, setSplitArray] = useState([]);
  console.log(data3)
  const prompt = data3 
  ? `Our Model has Diagnosed You with ${data3}. 
     - Precautions to Take
     - Self-Care Activities
     - Lifestyle Routines
     - Triggers to Avoid`
  : "";
    
    const [input, setInput] = useState(prompt);
    const [response, setResponse] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    console.log(splitArray)

    
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

    const splitString = response.split('*').filter(Boolean).map(item => item.trim());
    // const splitString = response;

    return (
        <div
        className="w-full min-h-screen h-full"  
        style={{
          backgroundColor: "#bae482",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        }}
      >
        <div className={`p-10 h-full flex flex-col justify-center items-center`}>
          <h1 className="text-2xl font-bold mb-6 text-[#006000] ">
            Ask Something Positive
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
          >
            <textarea
              value={input}
              onChange={handleChange}
              placeholder="Tell me something positive..."
              required
              className="w-full h-56 p-4 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-[#006000] text-white font-semibold py-2 rounded-md hover:bg-[#02c39a] transition duration-200
              "
            >
              Submit
            </button>
          </form>
          {response && (
            <div className="mt-6 p-4  h-full lg:w-[1000px] bg-green-100 border border-green-400 text-green-700 rounded-md">
              <h2 className="text-lg font-semibold">Response:</h2>
                <ul>
                    {splitString.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
                 </ul>
            </div>
          )}
        </div>
      </div>
  
    );
};

export default Aipage;


// {response && (
//     <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
//         <h2 className="text-lg font-semibold">Response:</h2>
//         <ul>
//         {splitString.map((item, index) => (
// <li key={index}>{item}</li>
// ))}
// </ul>
//     </div>
// )}