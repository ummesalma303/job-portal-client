import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/jobDetails/JobDetails";
import JobApply from "../pages/jobApply/JobApply";
import PrivateRoutes from "./PrivateRoutes";
import MyApplication from "../pages/myApplication/MyApplication";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ViewApplication from "../pages/viewApplication/ViewApplication";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2> Data Not Found </h2>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/signIn',
          element:<SignIn></SignIn>
        },
        {
          path:'/jobs/:_id',
          element:<PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params?._id}`)
        },
        {
          path:'/jobApply/:_id',
          element:<PrivateRoutes><JobApply></JobApply></PrivateRoutes>,
          // loader:({params})=>fetch(`http://localhost:5000/jobs/${params?._id}`)
        },
        {
          path:'/myApplication',
          element:<PrivateRoutes><MyApplication></MyApplication></PrivateRoutes>,
        },
        {
          path:'/addJob',
          element:<PrivateRoutes><AddJob></AddJob></PrivateRoutes>,
        },
        {
          path:'/myPostedJobs',
          element:<PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>,
         
        },
        {
          path:'/viewApplication/:id',
          element:<PrivateRoutes><ViewApplication></ViewApplication></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/jobApplications/${params.id}`)
         
        },
      ]
    },
  ]);

  export default router