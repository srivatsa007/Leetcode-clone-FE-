// import { useLocation, Link } from "react-router-dom";
// import SigninDiv from "./SigninDiv";
// import SignupDiv from "./SignupDiv";
// import { useState } from "react";
// import { IoClose } from "react-icons/io5";

// const LoggingPopupLayout = ({ popup, setpopup }) => {
//   const Location = useLocation();
//   const [reg, setReg] = useState(true);
//   return (
//     // <div className="signin-layout min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?w=996&t=st=1707253110~exp=1707253710~hmac=f921f19e6f476098c440c93e51e511815596ec7689acccf6c5ced48c706ca75f)'}}>
//     //     {/* <div className="hero-overlay bg-opacity-60"></div>
//     //     <div className="hero-content text-center text-neutral-content">
//     //         <div className="max-w-md">
//     //           <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//     //           <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//     //           <button className="btn btn-primary">Get Started</button>
//     //         </div>
//     //     </div> */}

//     //     {Location.pathname === "/layout/signin" && <SigninDiv/>}
//     //     {Location.pathname === "/layout/signup" && <SignupDiv/>}
//     // </div>

//     <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
//       <div className="bg-black z-90 opacity-50 top-0 left-0 w-screen h-screen absolute"></div>
//       <div className="bg-black w-full z-91 h-full px-6 relative max-w-4xl">
//         <div className=" w-full h-full flex items-center justify-center relative">
//           <div className="w-full relative ">
//             <IoClose
//               fontSize={35}
//               color="white"
//               className="cursor-pointer absolute -top-16 right-0"
//               onClick={() => {
//                 console.log("popup set close");
//                 setpopup(!popup);
//               }}
//             />
//             <div>
//               {reg ? (
//                 <SignupDiv setReg={setReg} />
//               ) : (
//                 <SigninDiv setReg={setReg} setpopup={setpopup} />
//               )}
//               {/* { (reg) &&
//                       <SignupDiv/>
//                     }

//                     { popup.isRegister &&
//                       <SignupDiv/>
//                     } */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoggingPopupLayout;
///?????????????????????????????

import { useLocation, Link } from "react-router-dom";
import SigninDiv from "./SigninDiv";
import SignupDiv from "./SignupDiv";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const LoggingPopupLayout = ({ popup, setpopup }) => {
  const Location = useLocation();
  const [reg, setReg] = useState(true);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-30 ">
      <div className="bg-black  opacity-50 top-0 left-0 w-full h-full absolute z-40"></div>
      <div className="bg-opacity-50  bg-white backdrop-blur-lg w-full max-w-md  z-50 rounded-lg overflow-hidden">
        <div className="p-6 text-[#333] relative">
          <div className="cursor-pointer absolute top-2 right-2">
            <IoClose
              fontSize={45}
              color="white"
              onClick={() => setpopup(!popup)}
            />
          </div>
          <div>
            {reg ? (
              <SignupDiv setReg={setReg} />
            ) : (
              <SigninDiv setReg={setReg} setpopup={setpopup} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggingPopupLayout;
