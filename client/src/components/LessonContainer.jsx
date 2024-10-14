import React from 'react';
import { Link } from 'react-router-dom';

const LessonContainer = ({ lesson }) => {
  return (
    <section className="text-white banner-container-style bg-gradient-to-r from-orange-600 to-orange-500">
      <div className="relative p-4 z-10">
        {/* Header */}
        <div className="mb-4">
          {/* <p className="font-bold opacity-80 uppercase tracking-wider text-shadow">
            Lesson {lesson.lessonNumber}
          </p> */}
          <h4 className="font-bold text-2xl sm:text-3xl md:text-3xl text-shadow">{lesson.lessonTitle}</h4>
          {/* <p className="font-bold opacity-80 tracking-wider text-shadow">{lesson.lessonPages}</p> */}
        </div>

        {/* Content */}
        <ul className="sm:text-xl flex px-64 flex-col gap-2">
          {lesson.lessonUnits.map((unit) => (
            <li key={unit.unitUrl}>
              <Link
                to={`/checkup/test`}
                className="exercise-style text-center"
              >
                {unit.unitTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LessonContainer;
