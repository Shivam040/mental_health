import { useState } from "react";
const QuestionPage = ({data,onDataChange,onVectorChange}) => 
    {
        const [output,setOutput]=useState([]);
        const [prediction, setPrediction] = useState('');
        const [tensor, setTensor] = useState([]);
        const [singleString, setsingleString] = useState("");
        const [clickedText, setClickedText] = useState(false);
        const handleClick = (text) => {
            // Use the spread operator to add the clicked text to the existing array
            setOutput((prevTexts) => [...prevTexts, text]);
            setClickedText(true)
          };

           const handleResult = () => {
            console.log("in function",prediction)
             onDataChange(prediction);
             onVectorChange(tensor); // Send data to the parent
           };

           

          const handleSubmit = async (e) => {
            e.preventDefault();

            setsingleString(output.join(' '));
            const data = { input: singleString };
            try {
              const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
        
              const result = await response.json();
              setPrediction(result.prediction);
              setTensor(result.tensor);
              
              ;
        
            } catch (error) {
              console.error("Error fetching the prediction:", error);
            }
            
          };


        console.log(output)
       
        console.log(singleString)
        return(<div className="h-full px-10"> 
                <h1 className='font-bold text-xl sm:text-2xl md:text-4xl text-center py-10' >Select What You Feel</h1>
                <div className="flex gap-5 flex-col ">
                    {data[0].lessonUnits[0].unitContent.map((unit) => (
                    <button
                    onClick={() => handleClick(unit)} 
                    className={`text-2xl px-2 py-2 hover:cursor-pointer border-2 rounded-xl border-gray-500      hover:bg-slate-800`}>{unit}</button>
                ))}
                </div>
                {/* {tensor && (
                    <div className="">
                        
                        {tensor.map((value, index) => (

                          
                            <div key={index}>{value} </div>
                        ))}
                        
                        
                    </div>
                )} */}
                {/* {prediction && <p>Prediction: {prediction}</p>} */}
               <div className="flex justify-between">
                <button onClick={handleSubmit} type="button" className=' text-xl flex justify-center items-center gap-2 text-white hover:text-red-800'>Submit</button>
                {prediction && <button onClick={handleResult} type="button" className=' text-xl flex justify-center items-center gap-2 text-white hover:text-red-800'>Result</button>}
                </div> 
              </div>)
                
    };
export default QuestionPage;