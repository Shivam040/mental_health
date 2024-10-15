import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";
import { AiOutlineLoading } from "react-icons/ai";
import FloatingIcon from "../components/FloatingIcon.jsx";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import PieChart from "../components/PieChart.jsx";
import image1 from "../assets/loneliness.png";
import { ListItem } from "@mui/material";
import { useState } from "react";
const Report = ({data1,data2,data3}) => {
  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) return <Navigate to="/login" />;
  const  [ tensordata ,setTensordata] = useState([]);
  // get the user data from the server
  const { loading, data } = useQuery(QUERY_USERS);

  // set the user data to a variable
  const users = data?.users || [];

  // sort the users by experience
  const sortedUsers = [...users].sort((a, b) => b.experience - a.experience);

  // style the first three rankings
  const rank = (index) => {
    switch (index) {
      case 0:
        return "ranking-first-style";
      case 1:
        return "ranking-second-style";
      case 2:
        return "ranking-third-style";
      default:
        return "";
    }
  };
  const diseaseList = [
    {
      id: "Anxiety",
      value: 500,
    },
    {
      id: "Depression",
      value: 500,
    },
    {
      id: "Bipolar Disorder",
      value: 500,
    },
  ];
  const dummyData = [
    { id: "Anxiety", label: "Anxiety", value: 500 },
    { id: "Depression", label: "Depression", value: 300 },
    { id: "Bipolar Disorder", label: "Bipolar Disorder", value: 200 },
    { id: "Normal", label: "Normal", value: 150 },
    { id: "Stress", label: "okay", value: 100 },
  ];
  const singleData = [
    { id: "Anxiety", label: "Anxiety", value: 500 },
    { id: "", label: "Normal", value: 300 },
  ];

  const illness = ["anxiety","Normal","Depresson","Bipolar","Polar","Stress","Panic"]

  const handleClick = () => {
    data3(data1); // Replace with the route you want to redirect to
};


  return (
    <section id="leaderboard" className="w-full min-h-screen p-4 md:p-8">
      {/* Page Heading */}
      <h1 className="h1-style mb-8">Report</h1>

      {/* Banner */}
      <div className="mb-8 banner-container-style text-white text-shadow bg-gradient-to-r from-green-600 to-green-800">
        <div className="relative p-8 z-10">
          <h2 className="banner-heading mb-3">Your Health..</h2>
          <p className="text-lg">Be the best.</p>
        </div>
        <div className="banner-bg-style bg-connections" />
      </div>

      {/* Leaderboard table */}
      <div className="box-container-style  ">
        <h2 className="text-xl font-bold mb-4">Analytics</h2>
        <div className="w-full h-56 flex flex-col md:flex-row m-4 md:space-x-2 lg:space-x-14 justify-center md:space-y-0 space-y-3">
          {diseaseList.map((item) => (
            <div
              key={item.id}
              className="bg-green-600 h-48 rounded-md flex flex-row w-56 md:w-72"
            >
              <div className="h-full w-1/2">
                <img src={image1} alt="s" className="h-12 w-12 mt-12 ml-5" />
                <h2 className="text-white font-extrabold ml-5 mt-8">
                  {item.id}
                </h2>
              </div>
              <div className="h-full w-1/2 flex justify-center items-center">
              <div></div>
                <PieChart dummyData={singleData} />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-56 flex flex-col md:flex-row m-4 md:space-x-2 lg:space-x-14 justify-center md:space-y-0 space-y-3">
          {diseaseList.map((item) => (
            <div
              key={item.id}
              className="bg-green-600 h-48 rounded-md flex flex-row w-56 md:w-72"
            >
              <div className="h-full w-1/2">
                <img src={image1} alt="s" className="h-12 w-12 mt-12 ml-5" />
                <h2 className="text-white font-extrabold ml-5 mt-8">
                  {item.id}
                </h2>
              </div>
              <div className="h-full w-1/2 flex justify-center items-center">
                <PieChart dummyData={singleData} />
              </div>
            </div>
          ))}
        </div>

        <div className="h-96">
          <PieChart dummyData={dummyData}></PieChart>
        </div>
        <div className="flex flex-col">
          {loading && (
            <AiOutlineLoading className="animate-spin h-12 w-12 mx-auto" />
          )}
          {/* 
          {sortedUsers.map((user, index) => (
            <div
              key={id-${user.username}}
              className="w-auto flex items-center p-2 px-4 gap-4 rounded-xl odd:bg-slate-900/5 dark:odd:bg-slate-900/50"
            >
              <span className={ranking-index-style ${rank(index)}}>{index + 1}</span>
              <div className="w-12 h-12 shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex justify-center items-center uppercase font-bold text-2xl text-white">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
              </div>

              <div className="flex flex-col flex-grow overflow-hidden">
                <h3 className="font-bold truncate">{user.username}</h3>
                <p className="text-gray-500 dark:text-gray-400 truncate">{user.experience} XP</p>
              </div>
            </div>
          ))} */}
        </div>
        <div>
          <p>Illness Predicted by  Model : {data1}</p>
          <p>Model's Confidence Score For Each Class : </p>
          {data2.map((value, index) => (
                <div key={index}>{illness[index]} = {value} </div> 
                ))}

        </div>
        <div
            className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition duration-300"
            onClick={handleClick}
        >
            {/* You can replace the text with an actual icon */}
            
           <p>Ask AI</p>
        </div>
      </div>
    </section>
  );
};

export default Report;