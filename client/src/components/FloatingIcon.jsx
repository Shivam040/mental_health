import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingIcon = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/ask'); // Replace with the route you want to redirect to
    };

    return (
        <div
            className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition duration-300"
            onClick={handleClick}
        >
            {/* You can replace the text with an actual icon */}
            
           <p>Ask AI</p>
        </div>
    );
};

export default FloatingIcon;
