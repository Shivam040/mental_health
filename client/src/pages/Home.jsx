import { Link, Navigate } from "react-router-dom";
import countryLogo from "../assets/logoimage.png";
import Auth from "../utils/auth";

import Scene from "../components/Scene";

const Home = () => {
  if (Auth.loggedIn()) return <Navigate to="/checkup" />;

  return (
    // Hero Section with Logo and Call to Action
    <section
      id="hero"
      className="w-full min-h-[calc(100vh-72px)] py-14 hero-bg"
    >
      <div className="max-w-7xl mx-auto  flex flex-col lg:flex-row items-center justify-between  ">
        {/* Call to Action */}
        <div className="flex flex-col h-screen items-center lg:items-start font-bold text-center lg:text-left gap-8 order-last lg:order-first">
          <h1 className="text-xl md:text-2xl lg:text-3xl uppercase">
            The Best Way To Know <br />
            <span className="text-[#02C39A] text-5xl md:text-6xl lg:text-7xl">
              Your Mental Health
            </span>
          </h1>
          <p className="max-w-md md:text-xl text-gray-500 dark:text-gray-400">
            “There is hope, even when your brain tells you there isn’t.”
          </p>
          <div className="w-72 flex flex-col text-center gap-4">
            {/* Sign Up Button */}
            <Link
              to="/signup"
              className="py-3 px-3 text-white bg-[#00A896] hover:bg-[#F0F3BD] rounded-xl shadow-xl hover:text-[#00A896]"
            >
              Start Testing
            </Link>
            {/* Login Button */}
            <Link
              to="/login"
              className="py-3 px-3 text-[#00A896] dark:text-gray-300 border-2 border-[#028090] dark:border-gray-300 bg-white dark:bg-slate-900 dark:hover:bg-gray-100/10 hover:bg-gray-300 rounded-xl shadow-xl"
            >
              Already have an account?
            </Link>
          </div>
        </div>
        {/* Country Logo */}
        <div className=" h-full w-full m-0 p-0">
          <Scene></Scene>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[400px]">
        <h1 className="text-center font-bold p-6 text-6xl pt-5">
          We are Here to Help You !{" "}
        </h1>

        <div className=""></div>
      </div>
      <div className="w-screen bg-gradient-to-r from-[#00A896] to-[#F0F3BD] h-[300px]">
        <div className="flex flex-row w-full pt-10 ">
          <div
            className="w-1/3 text-center pt-10 border-r-[1px] border-white
          "
          >
            <h1 className="text-2xl font-bold text-white">53.1K</h1>
            <p className="text-xl  text-white pt-4">Data Points </p>
          </div>
          <div className="w-1/3 text-center pt-10 border-r-[1px] border-white">
            <h1 className="text-2xl font-bold text-white">88.4% F1 Score</h1>
            <p className="text-xl  text-white pt-4">Model Accuracy</p>
          </div>
          <div className="w-1/3 text-center  pt-10 border-r-[1px] border-white">
            <h1 className="text-2xl font-bold text-white">BERT Model</h1>
            <p className="text-xl  text-white pt-4">Efficient NLP Model </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
