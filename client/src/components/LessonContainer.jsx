import React from "react";
import { Link } from "react-router-dom";
import illus from "../assets/illus.png";
const LessonContainer = ({ lesson }) => {
  return (
    <section className="text-white banner-container-style bg-gradient-to-r from-orange-600 to-orange-500 flex-row flex h-[300px]">
      <div className=" w-1/2 h-full m-2">
        <img src={illus}></img>
      </div>
      <div className=" w-1/2 h-full">
        {/* Header */}
        <div className="mb-4">
          <h4 className="font-bold text-2xl sm:text-3xl md:text-3xl text-shadow mt-14">
            Get Your Status
          </h4>
        </div>

        {/* Content */}
        <div className="w-48">
          <Link
            to={'/checkup/test'}
            className="exercise-style text-center w-20 h-12 mt-14 hover:bg-white hover:text-orange-600"
          >
            Take a Test{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LessonContainer;