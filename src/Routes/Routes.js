import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Page/Blog/Blog";
import Category from "../Page/Category/Category";
import Bmw from "../Page/Home/Bmw/Bmw";
import Home from "../Page/Home/Home";
import Tesla from "../Page/Home/Tesla/Tesla";
import Toyota from "../Page/Home/Toyota/Toyota";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Category></Category></PrivateRoute>,
      children: [
        {
          path: '/toyota',
          element: <Toyota></Toyota>
      },
      {
          path: '/tesla',
          element: <Tesla></Tesla>
      },
      {
          path: '/bmw',
          element: <Bmw></Bmw>
      },
      ]
    },
    {
      path:'*',
      element: 
      <div className="grid grid-cols-2 items-center">
          <div 
        className='text-center text-5xl text-red-600 mt-4 '>This Page Not Found 
        <span className='text-blue-600 text-sm'><Link to='/home'>click Home</Link></span>
        </div>
        <div>
          <img src="https://i.ibb.co/FzWYVyC/255-2550411-404-error-images-free-png-transparent-png.png" alt="" />
        </div>
      </div>
    }
  ]);