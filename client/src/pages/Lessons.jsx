import { Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { useState } from 'react';

import { LessonContainer } from '../components';
import { lessonData } from '../data';

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
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      question: "How does Tailwind work?",
      answer:
        "Tailwind works by providing a large set of utility classes that you can apply directly to HTML elements to style them.",
<<<<<<< HEAD
=======
      color: "#00a896",
>>>>>>> parent of 40dd3ca (Revert "css")
    },
    {
      question: "Can I customize Tailwind?",
      answer:
        "Yes, Tailwind is fully customizable. You can customize the design system by modifying the default configuration.",
<<<<<<< HEAD
=======
      color: "#028090",
>>>>>>> parent of 40dd3ca (Revert "css")
    },
  ];
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<<<<<<< HEAD
    <section
      id="lessons"
      className="w-full min-h-screen p-4 md:p-8"
    >
      <h1 className="h1-style mb-8 ">Check Up</h1>
=======
    <section id="lessons" className="w-full min-h-screen p-4 md:p-8">
      
>>>>>>> parent of 40dd3ca (Revert "css")
      {/* Banner */}
      <div className="mb-8 banner-container-style text-white text-shadow bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="relative p-8 z-10">
          <h2 className="banner-heading mb-3">Welcome {user.username}!</h2>
          <p className="text-lg">Your adventure begins here</p>
        </div>
        <div className="banner-bg-style bg-parkay-floor" />
      </div>
      <div className="mb-8">
        <br />
      </div>
      
      {/* Lessons */}
      <div className="flex flex-col gap-4 mx-10">
        {lessonData.map((lesson) => (
          <LessonContainer
            key={lesson.lessonUrl}
            lesson={lesson}
          />
        ))}
<<<<<<< HEAD
      </div>
      <div className="w-full   mt-10 justify-center">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`bg-orange-200 w-[630px] md:w-full py-2 px-2 rounded-lg shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform ${
              openIndex === index ? "" : "hover:-translate-y-1"
            }`}
            onClick={() => toggleOpen(index)}
          >
            {/* Question */}
            <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>

            {/* Answer */}
            {openIndex === index && (
              <div className="mt-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
</div>
=======
      </div> */}

<div className="w-full mt-10 flex flex-col justify-center ">
  {faqData.map((faq, index) => (
    <div
      key={index}
      className={`w-[630px] md:w-full py-2 px-4 h-20 shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform ${
        openIndex === index ? "h-24" : "hover:-translate-y-1 "
      }`}
      style={{ backgroundColor: faq.color }}  // Apply dynamic background color here
      onClick={() => toggleOpen(index)}
    >
      {/* Question */}
      <h3 className="text-lg text-white font-bold text-gray-800">{faq.question}</h3>

      {/* Answer */}
      {openIndex === index && (
        <div className="mt-2 text-gray-600 ">
          <p className="text-white">{faq.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>


      <div className="w-full   mt-10 justify-center flex flex-row space-x-10 ">
        <div className="bg-[#00A896] h-56 md:h-64 w-56 p-3 rounded-lg">
          <img src={stressbg} className="mb-4 rounded-lg"></img>
          <Link
            to={`/stress`}
            className="text-black font-bold  hover:bg-white hover:rounded-md hover:p-2 hover:text-orange-600"
          >
            Stress
          </Link>
        </div>
        <div className="bg-[#02c39a] h-56 w-56 md:h-64 p-3 rounded-lg">
          <img src={depressionbg} className="mb-4 rounded-lg"></img>
          <Link
            to={`/stress`}
            className="text-black font-bold  hover:bg-white hover:rounded-md hover:p-2 hover:text-orange-600"
          >
            Depressed
          </Link>
        </div>
        <div className="bg-[#F0F3BD] h-56 md:h-64 w-56 p-3 rounded-lg">
          <img src={anxietybg} className="mb-4 rounded-lg"></img>
          <Link
            to={`/stress`}
            className="text-black font-bold  hover:bg-white hover:rounded-md hover:p-2 hover:text-orange-600"
          >
            Anxiety
          </Link>
        </div>
      </div>
>>>>>>> parent of 40dd3ca (Revert "css")
    </section>
  );
};

export default Lessons;
