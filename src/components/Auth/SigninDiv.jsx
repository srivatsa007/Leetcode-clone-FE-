import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
        
        
        
        const SigninDive = () =>{
            const authCtx = useAuth();
            const emailRef = useRef();
            const passRef = useRef();
            const confrimPassRef = useRef();
            async function handleSubmit(e) {
              e.preventDefault();
              if (passRef.current.value !== confrimPassRef.current.value) {
                setError("Password and Confirm Password do not Match");
              }
              try {
                const response = await authCtx.signUp(
                  emailRef.current.value,
                  passRef.current.value
                );
                console.log(response);
                alert("You have successfully registered");
                nav("/layout/signin");
              } catch (error) {
                alert(error);
              }
            }
            const handleInputChange = (e) => {
                setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            };
            

                return (
                    <form className='space-y-6 px-6 pb-4' onSubmit={handleSubmit}>
                        <h3 className='text-xl font-medium text-white'>Sign in to LeetClone</h3>
                        <div>
                            <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
                                Your Email
                            </label>
                            <input
                                onChange={handleInputChange}
                                type='email'
                                name='email'
                                id='email'
                                className='
                        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
                    '
                                placeholder='name@company.com'
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
                                Your Password
                            </label>
                            <input
                                onChange={handleInputChange}
                                type='password'
                                name='password'
                                id='password'
                                className='
                        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
                    '
                                placeholder='*******'
                            />
                        </div>
            
                        <button
                            type='submit'
                            className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
                        '
                        >
                            {loading ? "Loading..." : "Log In"}
                        </button>
                        <button className='flex w-full justify-end' onClick={() => handleClick("forgotPassword")}>
                            <a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
                                Forgot Password?
                            </a>
                        </button>
                        <div className='text-sm font-medium text-gray-300'>
                            Not Registered?{" "}
                            <a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("register")}>
                                Create account
                            </a>
                        </div>
                    </form>
                );
            };
export default SigninDive;