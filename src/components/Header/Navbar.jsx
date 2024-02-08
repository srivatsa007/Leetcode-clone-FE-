// import Toggle from 'react-toggle'
// import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Navbar = () => {
    //Dark theme states
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
      // update state on toggle
      const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      };
      // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);


  //Auth
  const [user] = useAuthState(auth);
  

  return (
    
        <div className="navbar bg-primary h-fit max-h-3 w-screen px-10">
            {/* <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
            </div> */}
            <div className="flex-1  text-left border">
                <Link to="/">
                    <div className="h-full">
                    <img
                        src="https://imgs.search.brave.com/n4F8ExAGY_kzINgXKS-61UqT5-BZuFWlPse_LGolyP4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBhL0xlZXRDb2Rl/X0xvZ29fYmxhY2tf/d2l0aF90ZXh0LnN2/Zw.svg"
                        alt=""
                        className="h-[2rem] text-white"
                    />
                    </div>
                </Link>
            </div>
            <div className="flex-none">
            <div className="dropdown dropdown-end">
                
                    <label className="swap swap-rotate">
  
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" onChange={handleToggle} 
                            // show toggle image based on localstorage theme
                                checked={theme === "light" ? true : false}
                            />
                            
                            {/* sun icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                            
                            {/* moon icon */}
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    
                    </label>
                {/* </div> */}
            </div>
            <div className="login-drpdwn dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
                </ul>
            </div>


            </div>
    </div>
  
  )
}

export default Navbar
//////
// import { Link } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase";
// import { IoIosLogOut } from "react-icons/io";
// import { useAuth } from "../../context/AuthProvider";
// import { RxAvatar } from "react-icons/rx";
// import { BsList } from "react-icons/bs";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// function Header({ problempage }) {
//   const [user] = useAuthState(auth);
//   const authCtx = useAuth();
//   const handleLogout = async () => {
//     try {
//       await authCtx.logout(); // Call the logout function
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };
//   return (
//     <div className="h-[3rem] shadow-md flex justify-center">
//       <div className="w-[1200px] px-4 border flex items-center justify-between">
//         <div className="text-left border">
//           <Link to="/">
//             <div className="h-full">
//               <img
//                 src="https://imgs.search.brave.com/n4F8ExAGY_kzINgXKS-61UqT5-BZuFWlPse_LGolyP4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBhL0xlZXRDb2Rl/X0xvZ29fYmxhY2tf/d2l0aF90ZXh0LnN2/Zw.svg"
//                 alt=""
//                 className="h-[2rem] text-white"
//               />
//             </div>
//           </Link>
//         </div>
//         {problempage && (
//           <div className="flex items-center gap-2 flex-1 justify-center">
//             <div className="flex items-center justify-center rounded bg-gray-700 text-white h-8 w-8 cursor-pointer">
//               <FaChevronLeft />
//             </div>
//             <Link
//               to={"/ProblemSet"}
//               className="flex items-center gap-2 font-medium max-w-[170px] cursor-pointer"
//             >
//               <div>
//                 <BsList />
//               </div>
//               <p>ProblemList</p>
//             </Link>
//             <div className="flex items-center justify-center  bg-gray-700 text-white rounded h-8 w-8 cursor-pointer">
//               <FaChevronRight />
//             </div>
//           </div>
//         )}
//         <div>
//           <div>
//             {!user && (
//               <Link to={"/LogIn"}>
//                 <button className="bg-blue-800 text-white p-1.5 px-3 rounded font-semibold text-sm hover:bg-white border-blue-800 hover:text-blue-800 transition ease-in-out duration-300">
//                   Sign In
//                 </button>
//               </Link>
//             )}
//             {user && (
//               <p className="flex items-center gap-4">
//                 <RxAvatar size={28} />
//                 <IoIosLogOut
//                   size={28}
//                   className="hover:text-blue-600 cursor-pointer"
//                   onClick={() => {
//                     handleLogout();
//                   }}
//                 />
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Header;
