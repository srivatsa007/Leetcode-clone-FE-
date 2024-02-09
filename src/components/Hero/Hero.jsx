import { Link } from "react-router-dom";
import { useState } from "react";
import bkgImg from "../../assets/hero-wallpaper.jpg";
import Navbar from "../Header/Navbar";
import LoggingPopupLayout from "../Auth/SigninLayout";

const Hero = () => {
  //state for popup
  const [popup, setpopup] = useState(false);

  return (
    <>
      <Navbar pagination={false} setpopup={setpopup} />

      <div
        className="hero w-screen h-screen relative top-2 absolute"
        style={{
          backgroundImage: `url(${bkgImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40 z-0 "></div>
        <div className="hero-content text-center text-neutral-content z-0 absolute top-16 ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there! ✋</h1>
            <p className="mb-5">
              LeetCode is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>

            <Link to="/ProblemSet">
              <button
                className="btn btn-primary"
                // onClick={() => {
                //   setpopup((prevState) => !prevState);
                // }}
              >
                Go to Problems
              </button>
            </Link>

            {/* {youtubePlayer.isOpen && (<signin/>)} */}
          </div>
        </div>
      </div>

      {popup && <LoggingPopupLayout popup={popup} setpopup={setpopup} />}
    </>
  );
};

export default Hero;
