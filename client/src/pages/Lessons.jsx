import { Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { useState } from 'react';
import stressbg from "../assets/stressbg123.jpg";
import anxietybg from "../assets/depression.png";
import depressionbg from "../assets/anxiety.png";
import { LessonContainer } from '../components';
import { lessonData } from '../data';
import { Link } from 'react-router-dom';
const Lessons = () => {
  // If the user is not logged in, redirect to the login page
  if (!Auth.loggedIn()) return <Navigate to="/login" />;

  // get the user's data from the server
  const { data } = useQuery(QUERY_ME);
  // set the user's data to a variable
  const user = data?.me || {};
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How can I improve my mental health?",
      answer:
        "You can improve mental health by practicing self-care, seeking support, maintaining a healthy lifestyle, and talking to a therapist or counselor if needed.",
        color: "#02C39A",
      },
    {
      question: "What are common signs of mental health issues?",
      answer:
        "Common signs include prolonged sadness, excessive worry, mood swings, withdrawal from social activities, and changes in sleep or appetite.",
        color: "#00a896",
      },
    {
      question: "Are mental health issues common?",
      answer:
        "Yes, mental health issues are very common. Nearly 1 in 5 adults experiences mental health challenges each year.",
        color: "#028090",
      },
  ];
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="lessons"
      className="w-full min-h-screen p-4 md:p-8"
    >
      {/* Banner */}
      <div className="mb-8 banner-container-style text-white text-shadow bg-gradient-to-r from-[#028090] to-[#00A896]">
        <div className="relative p-8 z-10">
          <h2 className="banner-heading  mb-3">Welcome {user.username}!</h2>
          <p className="text-lg">How are you feeling today ?</p>
        </div>
        <div className="banner-bg-style " />
      </div>
      
      {/* Lessons */}
      <div className="flex flex-col gap-4 ">
        {lessonData.map((lesson) => (
          <LessonContainer
            key={lesson.lessonUrl}
            lesson={lesson}
          />
        ))}
      </div>
      
      <div className="w-full  mt-10 justify-center">
      <div className="w-full mt-10 flex flex-col justify-center">
  {faqData.map((faq, index) => (
    <div
      key={index}
      className={`w-[630px] md:w-full py-2 px-4 h-20 shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform ${
        openIndex === index ? "" : "hover:-translate-y-1 hover:rounded-xl "
      }`}
      style={{ backgroundColor: faq.color }}  // Apply dynamic background color here
      onClick={() => toggleOpen(index)}
    >
      {/* Question */}
      <h3 className="text-lg font-bold text-white">{faq.question}</h3>

      {/* Answer */}
      {openIndex === index && (
        <div className="mt-2 text-slate-800">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>

      {/* <div className="w-full   mt-10 justify-center flex flex-row space-x-10 ">
        <div className="bg-[#CCD5AE] h-56 w-56 p-3 rounded-lg">
          <img src={stressbg} className="mb-4 rounded-lg"></img>
          <Link
            to={'/stress'}
            className="text-black font-bold  hover:bg-white hover:rounded-md hover:p-2 hover:text-orange-600"
          >
            Stress
          </Link>
        </div>
        <div className="bg-[#CCD5AE] h-56 w-56 p-3 rounded-lg">
          <img src={depressionbg} className="mb-4 rounded-lg"></img>
          <Link
            to={'/stress'}
            className="text-black font-bold  hover:bg-white hover:rounded-md hover:p-2 hover:text-orange-600"
          >
            Depressed
          </Link>
        </div>
        <div className="bg-[#CCD5AE] h-56 w-56 p-3 rounded-lg">
          <img src={anxietybg} className="mb-4 rounded-lg"></img>
          <Link
            to={'/stress'}
            className="text-black font-bold  hover:bg-white hover:rounded-md hover:p-2 hover:text-orange-600"
          >
            Anxiety
          </Link>
        </div>
        </div> */}
        </div>
    </section>
  );
};

export default Lessons;
