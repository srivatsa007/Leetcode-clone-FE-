import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Header/Navbar";
import LoggingPopupLayout from "../Auth/SigninLayout";

const Hero = () => {
  //state for popup
  const [popup, setpopup] = useState(false);

  return (
    <>
      <Navbar pagination={false} setpopup={setpopup} />

      <div
        className="hero w-screen h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?w=996&t=st=1707253110~exp=1707253710~hmac=f921f19e6f476098c440c93e51e511815596ec7689acccf6c5ced48c706ca75f)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 z-0"></div>
        <div className="hero-content text-center text-neutral-content z-0">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
