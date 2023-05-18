import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/Signup";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path:'/bookings',
          element: <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        },
        {
          path:'/book/:id',
          element: <PrivateRoute><BookService></BookService></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);
  export default router;