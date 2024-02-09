// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import ProblemSet from "./components/Problems/ProblemsListPage/ProblemSet";
import SigninLayout from "./components/Auth/SigninLayout";
import CodingArea from "./components/CodingArea/CodingArea";
import "./App.css";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* <Route path="/Navbar" element={<Navbar />} /> */}
          <Route path="/" element={<Hero />} />

          <Route path="/layout/:loginOption" element={<SigninLayout />} />
          <Route path="/ProblemSet" element={<ProblemSet />} />
          <Route path="/Problems/:id/:name" element={<CodingArea />} />

          {/* <div className="App">
          <Navbar/>
          <Hero/>
        </div> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
///?????????????????????????????????????????????????????????????????????????????????????????????????
// import About from './About/About'
// import Error from './Error'
// import Food from './Food/Food'
// import FoodItem from './Food/FoodItem'
// import Layout from './Layout'
// import Main from './Main/Main'
// import Quotes from './Quotes/Quotes'
// import Restaurants from './Restaurants/Restaurants'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Navbar from './components/Header/Navbar'

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Layout />,
// 		children: [
// 			{
// 				path: '/',
// 				element: <Main />,
// 			},
// 			{
// 				path: '/quote',
// 				element: <Quotes />,
// 			},
// 			{
// 				path: '/restaurant',
// 				element: <Restaurants />,
// 			},
// 			{
// 				path: '/food',
// 				element: <Food />,
// 			},
// 			{
// 				path: '/food/:id',
// 				element: <FoodItem />,
// 			},

// 			{
// 				path: '/contact',
// 				element: <About />,
// 			},
// 		],
// 		errorElement: <Error />,
// 	},
// 	{
// 		path: '/',
// 		element: <loginlayout/>
// 		children: [],
// 	}
// ])

// const App = () => {
// 	return (
// 		<div className='relative'>
// 			<RouterProvider router={router} />
// 		</div>
// 	)
// }

// export default App
// ////
