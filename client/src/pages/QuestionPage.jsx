import { useState } from "react";
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const QuestionPage = ({data,onDataChange,onVectorChange}) => 
    {
        const [output,setOutput]=useState([]);
        const [prediction, setPrediction] = useState('');
        const [tensor, setTensor] = useState([]);
        const [singleString, setSingleString] = useState("");
        const [clickedText, setClickedText] = useState(false);
        const handleClick = (text) => {
            // Use the spread operator to add the clicked text to the existing array
            setOutput((prevTexts) => [...prevTexts, text]);
            setClickedText(true)
            toast.success("Understood !");
          };

           const handleResult = () => {
            // console.log("in function",prediction)
             onDataChange(prediction);
             onVectorChange(tensor); // Send data to the parent
           };

           

          const handleSubmit = async (e) => {
            e.preventDefault();

            const single=output.join(' ')
            const data = { input: single };
            try {
              const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
        
              const result = await response.json();
              console.log("in function",result.prediction)
              setPrediction(result.prediction);
              setTensor(result.tensor);
        
            } catch (error) {
              console.error("Error fetching the prediction:", error);
            }
            
          };


        // console.log(output)
        console.log(tensor)
        // console.log(singleString)
        return(<div className="h-full px-10 bg-[#02c3996c] "> 
                <h1 className='font-bold text-xl sm:text-2xl md:text-4xl text-center py-10' >Select What You Feel</h1>
                <div className="flex gap-5 flex-col ">
                    {data[0].lessonUnits[0].unitContent.map((unit) => (
                    <button
                    onClick={() => handleClick(unit)} 
                    className={`text-2xl px-2 py-2 hover:cursor-pointer border-2 rounded-xl border-gray-500  hover:border-[#00a896]`}>{unit}</button>
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
               <div className="flex justify-between items-start">
                <button onClick={handleSubmit} type="button" className="w-full my-6 py-3 mx-5 px-6 bg-[#00a896] hover:bg-[#02c39a] text-white font-bold rounded-xl"
                >Submit</button>
                {prediction && <button onClick={handleResult} type="button" className="w-full my-6 py-3 mx-5 px-6 bg-[#00a896] hover:bg-[#02c39a] text-white font-bold rounded-xl">Result</button>}
                </div> 
                <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
              </div>)
                
    };
export default QuestionPage;