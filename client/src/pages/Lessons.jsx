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
    },
    {
      question: "Can I customize Tailwind?",
      answer:
        "Yes, Tailwind is fully customizable. You can customize the design system by modifying the default configuration.",
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
      <h1 className="h1-style mb-8 ">Check Up</h1>
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
    </section>
  );
};

export default Lessons;
