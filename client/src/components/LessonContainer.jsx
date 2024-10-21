import React from "react";
import { Link } from "react-router-dom";
import illus from "../assets/illus.png";
const LessonContainer = ({ lesson }) => {
  return (
    <section className="text-white banner-container-style bg-gradient-to-r from-[#02C39A] to-[#F0F3BD] flex-row flex h-[300px] ">
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
        <p className="font-bold text-xs md:text-2xl pr-20 mr-6">
          You are not a burden. You are human, and you deserve to be heard,
          understood, and supported.
        </p>

        {/* Content */}
        <div className="w-48 mt-6 ">
          <Link
            to={'/checkup/test'}
            className=" py-3 px-3 text-white bg-[#00A896] hover:bg-[#F0F3BD] rounded-xl shadow-xl hover:text-[#00A896]"
          >
            Take a Test{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LessonContainer;