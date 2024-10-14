import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const QuestionPage = ({data,onDataChange}) => 
    {
        const [output,setOutput]=useState([])
        const [clickedText, setClickedText] = useState(false);

        
        const navigate = useNavigate();
        const handleClick = (text) => {
            // Use the spread operator to add the clicked text to the existing array
            setOutput((prevTexts) => [...prevTexts, text]);
            setClickedText(true)
          };

          const handleSubmit = () => {
            onDataChange(output); 
            navigate('/report'); 
     
          };


          // const handleSubmit = async (e) => {
          //   e.preventDefault();
        
          //   // Prepare the data to be sent to the backend
          //   // const data = { input: inputData.split(",").map(Number) }; // Assuming input is a comma-separated list of numbers
        
          //   try {
          //     const response = await fetch('http://localhost:5000/predict', {
          //       method: 'POST',
          //       headers: {
          //         'Content-Type': 'application/json',
          //       },
          //       body: JSON.stringify(output),
          //     });
        
          //     const result = await response.json();
          //     setPrediction(result.prediction);
        
          //   } catch (error) {
          //     console.error("Error fetching the prediction:", error);
          //   }
          // };


        console.log(output)
        return(<div className="h-full px-10"> 
                <h1 className='font-bold text-xl sm:text-2xl md:text-4xl text-center py-10' >Select What You Feel</h1>
                <div className="flex gap-5 flex-col ">
                    {data[0].lessonUnits[0].unitContent.map((unit) => (
                    <button
                    onClick={() => handleClick(unit)} 
                    className={`text-2xl px-2 py-2 hover:cursor-pointer border-2 rounded-xl border-gray-500      hover:bg-slate-800`}>{unit}</button>
                ))}
                </div>
                    <button onClick={handleSubmit} type="button" className='flex justify-center items-center gap-2 text-white hover:text-slate-800'>Submit</button></div>)
       
    };
export default QuestionPage;